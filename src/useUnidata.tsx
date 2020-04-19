import _ from 'lodash'
import React, { useContext, useEffect } from 'react'
import { UnidataContext } from './provider'

export const useUnidata = (subscribed: object) => {
  const { dataSetter, data = {}, initData } = useContext(UnidataContext)

  let changed = false
  const subscribedData = _.mapValues(subscribed, (v, k) => {
    if (data[k] !== undefined || data[k] === v) return data[k]
    changed = true
    return v
  })

  useEffect(() => {
    if (changed && typeof initData === 'function') {
      initData({ ...data, ...subscribedData })
    }
  }, [changed])

  return [subscribedData, dataSetter]
}

interface ISubscribedComponentProps {
  deps: string
}

export const subscribe = (subscribed: object) => (
  WrappedComponent: React.ElementType
) => (props: React.Props<any>) => {
  const [data, dataSetter] = useUnidata(subscribed)
  const parentProps = { ...props }
  const deps = JSON.stringify(data)
  const SubscribedComponent: React.FC<ISubscribedComponentProps> = () => (
    <WrappedComponent data={data} dataSetter={dataSetter} {...parentProps} />
  )
  return React.useMemo(() => <SubscribedComponent deps={deps} />, [deps])
}
