import { mapValues, values, pick } from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import { ISubscribedComponentProps } from './types'
import { getDisplayName } from './utils'

export const useUnidata = (subscribed: object) => {
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

export const subscribe = (subscribed?: object) => (
  WrappedComponent: React.ElementType
) => {
  const MemoizedUnidataComponent = (props: object): JSX.Element => {
    const [data, dataSetter, subscribedState] = useUnidata(subscribed || {})
    const parentProps = { ...props }
    const deps = values(subscribedState).join('-')

    const SubscribedComponent: React.ElementType<ISubscribedComponentProps> = () => (
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
