import { mapValues, values, pick } from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import {
  SubscribedComponentProps,
  DataCollection,
  UnidataAction,
} from './types'
import { getDisplayName } from './utils'

/**
 * Hooks to return data the Component is listening to, state key, and data setter functions
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const useUnidata = (
  subscribed: DataCollection = {}
): [DataCollection, React.Dispatch<UnidataAction>, string] => {
  const { dispatch, store } = useContext(UnidataContext)
  const { data, state } = store

  const changedData: DataCollection = {}
  const subscribedData = mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changedData[k] = v
    return v
  })

  const hasChanged = Object.keys(changedData).length > 0

  const subscribedState = values(pick(state, Object.keys(subscribed))).join('-')

  useEffect(() => {
    if (hasChanged) {
      dispatch({
        type: 'init',
        payload: { data: changedData },
      })
    }
  }, [hasChanged, dispatch, changedData])

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
    const [data, dispatch, state] = useUnidata(subscribed || {})
    const parentProps = { ...props }

    const SubscribedComponent: React.ElementType<SubscribedComponentProps> = () => (
      <WrappedComponent data={data} dispatch={dispatch} {...parentProps} />
    )
    SubscribedComponent.displayName = getDisplayName(
      'UnidataSubscribed',
      WrappedComponent
    )
    return React.useMemo(() => <SubscribedComponent state={state} />, [state])
  }
  MemoizedUnidataComponent.displayName = getDisplayName(
    'UnidataMemoized',
    WrappedComponent
  )
  return MemoizedUnidataComponent
}
