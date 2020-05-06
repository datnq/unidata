/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, createContext, useRef } from 'react'
import isEqual from 'lodash/isEqual'
import { getFilterFunction, generateDataState } from './utils'
import { IUnidataProviderProps, IFilterFn, IUnidataContext } from './types'

export const UnidataContext = createContext<Partial<IUnidataContext>>({})

export const UnidataProvider = ({
  initialData,
  children,
}: React.PropsWithChildren<IUnidataProviderProps>) => {
  const dataState = useRef({})
  const unidata = useRef(initialData)
  const [, forceUpdate] = useState(dataState.current)

  const updateDataState = (newData: object) => {
    dataState.current = { ...dataState.current, ...generateDataState(newData) }
    forceUpdate(dataState.current)
  }

  useEffect(() => {
    if (!isEqual(unidata, initialData)) {
      updateDataState(initialData)
    }
  }, [initialData])

  const initData = useCallback(
    (value) => {
      const newData = { ...value, ...unidata }
      if (!isEqual(Object.keys(newData), Object.keys(unidata))) {
        unidata.current = { ...value, ...unidata }
        updateDataState(newData)
      }
    },
    [dataState]
  )

  const put = (name: string, value: any): void => {
    if (!isEqual(unidata.current[name], value) || !dataState.current[name]) {
      unidata.current[name] = Array.isArray(value) ? [...value] : value
      updateDataState({ [name]: value })
    }
  }

  const dataSetter = {
    put,
    add: (name: string, value: any): void => {
      const d = unidata.current[name]

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

      const d = unidata.current[name]
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

      const d = unidata.current[name]

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
    <UnidataContext.Provider
      value={{ data: unidata.current, dataState: dataState.current, dataSetter, initData }}
    >
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
