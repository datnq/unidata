import { mapValues, values, pick } from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import { SubscribedComponentProps, DataCollection } from './types'
import { getDisplayName } from './utils'

/**
 * Hooks to return data the Component is listening to, state key, and data setter functions
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const useUnidata = (subscribed: DataCollection = {}) => {
  const { dataSetter, state = {}, data = {}, initData } = useContext(
    UnidataContext
  )

  let changed = false
  const subscribedData = mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changed = true
    return v
  })

  const subscribedState = pick(state, Object.keys(subscribed))

  useEffect(() => {
    if (changed && typeof initData === 'function') {
      initData({ ...data, ...subscribedData })
    }
  }, [changed])

  return [subscribedData, dataSetter, subscribedState]
}

/**
 * Subscribe this component to specific data. Once those data change, Component will be rerender
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const subscribe = (subscribed?: DataCollection) => (
  WrappedComponent: React.ElementType
) => {
  const MemoizedUnidataComponent = (props: object): JSX.Element => {
    const [data, dataSetter, subscribedState] = useUnidata(subscribed || {})
    const parentProps = { ...props }
    const deps = values(subscribedState).join('-')

    const SubscribedComponent: React.ElementType<SubscribedComponentProps> = () => (
      <WrappedComponent data={data} dataSetter={dataSetter} {...parentProps} />
    )
    SubscribedComponent.displayName = getDisplayName(
      'UnidataSubscribed',
      WrappedComponent
    )
    return React.useMemo(() => <SubscribedComponent deps={deps} />, [deps])
  }
  MemoizedUnidataComponent.displayName = getDisplayName(
    'UnidataMemoized',
    WrappedComponent
  )
  return MemoizedUnidataComponent
}
