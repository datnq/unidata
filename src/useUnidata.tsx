import { mapValues, values, pick } from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import {
  SubscribedComponentProps,
  DataCollection,
  FilterFn,
  DataStateCollection,
  UnidataAction,
} from './types'
import { getDisplayName } from './utils'

/**
 * Hooks to return data the Component is listening to, state key, and data setter functions
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const useUnidata = (
  subscribed: DataCollection = {}
): [DataCollection, React.Dispatch<UnidataAction>, DataStateCollection] => {
  const { dispatch, state = {}, data = {} } = useContext(UnidataContext)

  let changed = false
  const subscribedData = mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changed = true
    return v
  })

  const subscribedState = pick(state, Object.keys(subscribed))

  useEffect(() => {
    if (changed) {
      dispatch({
        type: 'init',
        data: { ...data, ...subscribedData },
      })
    }
  }, [changed, data, dispatch, subscribedData])

  return [subscribedData, dispatch, subscribedState]
}

/**
 * Subscribe this component to specific data. Once those data change, Component will be rerender
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const subscribe = (subscribed?: DataCollection) => (
  WrappedComponent: React.ElementType
) => {
  const MemoizedUnidataComponent = (props: object): JSX.Element => {
    const [data, dispatch, subscribedState] = useUnidata(subscribed || {})
    const parentProps = { ...props }
    const deps = values(subscribedState).join('-')

    const dispatcher = {
      put: (name: string, value: any) => dispatch({ type: 'put', name, value }),
      add: (name: string, value: any) => dispatch({ type: 'add', name, value }),
      update: (name: string, filter: FilterFn, value: any) =>
        dispatch({ type: 'update', name, value, filter }),
      remove: (name: string, filter: FilterFn, forced = false) =>
        dispatch({
          type: 'remove',
          filter,
          name,
          forced,
        }),
    }

    const SubscribedComponent: React.ElementType<SubscribedComponentProps> = () => (
      <WrappedComponent data={data} dispatcher={dispatcher} {...parentProps} />
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
