/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, createContext } from 'react'
import _ from 'lodash'
import { getFilterFunction, IFilterFn } from './utils'

interface IUnidataContext {
  dataSetter: {
    put: (name: string, value: any) => void
    add: (name: string, value: any) => void
    remove: (name: string, filter: IFilterFn, force?: boolean) => void
    update: (name: string, filter: IFilterFn, value: any) => void
  }
  data: object
  initData: (value: any) => void
}

interface IUnidataProviderProps {
  initialData: object
  setData: React.Dispatch<React.SetStateAction<object>>
}

export const UnidataContext = createContext<Partial<IUnidataContext>>({})

let unidata = {}
export const UnidataProvider = ({
  initialData,
  children,
}: React.PropsWithChildren<IUnidataProviderProps>) => {
  const [, forceUpdate] = useState()

  useEffect(() => {
    if (!_.isEqual(unidata, initialData)) forceUpdate({ ...initialData })
  }, [initialData])

  const initData = useCallback(
    (value) => {
      const newData = { ...value, ...unidata }
      if (!_.isEqual(Object.keys(newData), Object.keys(unidata))) {
        unidata = { ...value, ...unidata }
        forceUpdate({ ...unidata })
      }
    },
    [unidata]
  )

  const put = (name: string, value: any): void => {
    unidata[name] = Array.isArray(value) ? [...value] : value
    forceUpdate({ ...unidata })
  }

  const dataSetter = {
    put,
    add: (name: string, value: any): void => {
      const d = unidata[name]

      if (!Array.isArray(d)) {
        put(name, value)
      } else {
        put(name, [...d, value])
      }
    },
    remove: (name: string, filter: IFilterFn, forced = false): void => {
      if (!filter && !forced) {
        throw new Error(
          'Filter is required for remove data. Unless you pass force = true'
        )
      }

      const d = unidata[name]
      if (!Array.isArray(d) || forced) {
        delete d[name]

        put(name, d)
      } else {
        const filterFn = getFilterFunction(filter)

        put(
          name,
          d.filter((item, index) => !filterFn(item, index))
        )
      }
    },
    update: (name: string, filter: IFilterFn, value: any): void => {
      if (!filter) throw new Error('Filter is required for update data')

      const d = unidata[name]

      if (!Array.isArray(d) || typeof value !== 'object') {
        put(name, value)
      } else {
        const filterFn = getFilterFunction(filter)
        const doUpdate = (i: any, v: any) =>
          typeof i === 'object' ? { ...i, ...v } : v

        put(
          name,
          d.map((item, index) =>
            filterFn(item, index) ? doUpdate(item, value) : item
          )
        )
      }
    },
  }
  return (
    <UnidataContext.Provider value={{ data: unidata, dataSetter, initData }}>
      {children}
    </UnidataContext.Provider>
  )
}

export const withUnidata = (initialData: object | undefined) => (
  App: React.ElementType
) => (props: React.Props<any>) => {
  const [data, setData] = useState(initialData || {})
  return (
    <UnidataProvider initialData={data} setData={setData}>
      <App {...props} />
    </UnidataProvider>
  )
}
