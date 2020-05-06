import React, { useState, useCallback, createContext, useRef } from 'react'
import isEqual from 'lodash/isEqual'
import { getFilterFunction, generateDataState } from './utils'
import { IUnidataProviderProps, IFilterFn, IUnidataContext, IUnidataRef } from './types'

export const UnidataContext = createContext<Partial<IUnidataContext>>({})

export const UnidataProvider = ({
  initialData,
  children,
}: React.PropsWithChildren<IUnidataProviderProps>) => {
  const unidata = useRef<IUnidataRef>({ data: initialData, state: generateDataState(initialData) })
  const [, forceUpdate] = useState(unidata.current.state)

  const updateDataState = (newData: object) => {
    unidata.current.state = { ...unidata.current.state, ...generateDataState(newData) }
    forceUpdate(unidata.current.state)
  }

  const initData = useCallback(
    (data) => {
      const newData = { ...data, ...unidata.current.data }
      if (!isEqual(Object.keys(newData), Object.keys(unidata.current.data))) {
        unidata.current.data = { ...data, ...unidata.current.data }
        updateDataState(newData)
      }
    },
    []
  )

  const put = (name: string, value: any): void => {
    if (!isEqual(unidata.current.data[name], value) || !unidata.current.state[name]) {
      unidata.current.data[name] = Array.isArray(value) ? [...value] : value
      updateDataState({ [name]: value })
    }
  }

  const add = (name: string, value: any): void => {
    const d = unidata.current.data[name]

    if (!Array.isArray(d)) {
      put(name, value)
    } else {
      put(name, [...d, value])
    }
  }
  const remove = (name: string, filter: IFilterFn, forced = false): void => {
    if (!filter && !forced) {
      throw new Error(
        'Filter is required for remove data. Unless you pass force = true'
      )
    }

    const d = unidata.current.data[name]
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
  }
  const update = (name: string, filter: IFilterFn, value: any): void => {
    if (!filter) throw new Error('Filter is required for update data')

    const d = unidata.current.data[name]

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
  }

  return (
    <UnidataContext.Provider
      value={{
        ...unidata.current, initData, dataSetter: {
          put,
          add,
          remove,
          update
        }
      }}
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
