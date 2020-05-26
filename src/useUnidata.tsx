import { mapValues, values, pick } from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import {
  SubscribedComponentProps,
  DataCollection,
  FilterFn,
  UnidataType,
  Dispatcher
} from './types'
import { getDisplayName } from './utils'

/**
 * Hooks to return data the Component is listening to, state key, and data setter functions
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const useUnidata = (
  subscribed: DataCollection = {}
): [UnidataType, Dispatcher] => {
  const { dispatch, store } = useContext(UnidataContext)
  const { data, state } = store

  const changedData: DataCollection = {}
  const subscribedData = mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changedData[k] = v
    return v
  })

  const subscribedState = pick(state, Object.keys(subscribed))

  const unidata = {
    data: subscribedData,
    state: subscribedState
  }

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
        forced
      })
  }

  useEffect(() => {
    if (Object.keys(changedData)) {
      dispatch({
        type: 'init',
        data: changedData
      })
    }
  }, [changedData, data, dispatch, subscribedData])

  return [unidata, dispatcher]
}

/**
 * Subscribe this component to specific data. Once those data change, Component will be rerender
 * @param {DataCollection} subscribed Data which the component want to subscribe to. { name: defaultValue }
 */
export const subscribe = (subscribed?: DataCollection) => (
  WrappedComponent: React.ElementType
) => {
  const MemoizedUnidataComponent = (props: object): JSX.Element => {
    const [unidata, dispatcher] = useUnidata(subscribed || {})
    const parentProps = { ...props }
    const deps = values(unidata.state).join('-')

    const SubscribedComponent: React.ElementType<SubscribedComponentProps> = () => (
      <WrappedComponent
        data={unidata.data}
        dispatcher={dispatcher}
        {...parentProps}
      />
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
