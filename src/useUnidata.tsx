import mapValues from 'lodash/mapValues'
import values from 'lodash/values'
import pick from 'lodash/pick'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'
import { ISubscribedComponentProps } from './types'

export const useUnidata = (subscribed: object) => {
  const { dataSetter, dataState = {}, data = {}, initData } = useContext(
    UnidataContext
  )

  let changed = false
  const subscribedData = mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changed = true
    return v
  })

  const subscribedState = pick(dataState, Object.keys(subscribed))

  useEffect(() => {
    if (changed && typeof initData === 'function') {
      initData({ ...data, ...subscribedData })
    }
  }, [changed])

  return [subscribedData, dataSetter, subscribedState]
}

export const subscribe = (subscribed?: object) => (
  WrappedComponent: React.ElementType
) => (props: React.Props<any>) => {
  const [data, dataSetter, subscribedState] = useUnidata(subscribed || {})
  const parentProps = { ...props }
  const deps = values(subscribedState).join('-')

  const SubscribedComponent: React.ElementType<ISubscribedComponentProps> = () => (
    <WrappedComponent data={data} dataSetter={dataSetter} {...parentProps} />
  )
  return React.useMemo(() => <SubscribedComponent deps={deps} />, [deps])
}
