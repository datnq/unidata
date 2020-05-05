/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, createContext } from 'react'
import isEqual from 'lodash/isEqual'
import { getFilterFunction, generateDataState } from './utils'
import { IUnidataProviderProps, IFilterFn, IUnidataContext } from './types'

export const UnidataContext = createContext<Partial<IUnidataContext>>({})

let unidata = {}
let dataState = {}

export const UnidataProvider = ({
  initialData,
  children,
}: React.PropsWithChildren<IUnidataProviderProps>) => {
  const [, forceUpdate] = useState()

  const updateDataState = (newData: object) => {
    dataState = generateDataState(dataState, newData)
    forceUpdate(dataState)
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
        unidata = { ...value, ...unidata }
        updateDataState(newData)
      }
    },
    [dataState]
  )

  const put = (name: string, value: any): void => {
    unidata[name] = Array.isArray(value) ? [...value] : value
    updateDataState({ [name]: value })
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
    <UnidataContext.Provider
      value={{ data: unidata, dataState, dataSetter, initData }}
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
