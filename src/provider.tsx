import React, {
  useState,
  useCallback,
  createContext,
  PropsWithChildren,
  useLayoutEffect,
} from 'react'
import { isEqual } from 'lodash'
import { getFilterFunction, generateDataState, getDisplayName } from './utils'
import {
  UnidataProviderProps,
  FilterFn,
  UnidataContextType,
  UnidataRef,
  DataCollection,
} from './types'

export const UnidataContext = createContext<Partial<UnidataContextType>>({})
UnidataContext.displayName = 'UnidataContext'

const UnidataStore: UnidataRef = {
  data: {},
  state: {},
}

/**
 * Wrapper of UnidataContext.Provider
 * @param {UnidataProviderProps} props
 */
export const UnidataProvider = ({
  initialData,
  children,
}: PropsWithChildren<UnidataProviderProps>) => {
  const [, forceUpdate] = useState(UnidataStore.state)

  const updateDataState = (newData: DataCollection) => {
    UnidataStore.state = {
      ...UnidataStore.state,
      ...generateDataState(newData),
    }
    forceUpdate(UnidataStore.state)
  }

  const initData = useCallback((data) => {
    const newData = { ...data, ...UnidataStore.data }
    if (!isEqual(Object.keys(newData), Object.keys(UnidataStore.data))) {
      UnidataStore.data = { ...data, ...UnidataStore.data }
      updateDataState(newData)
    }
  }, [])

  useLayoutEffect(() => {
    initData(initialData)
  }, [initData, initialData])

  const put = (name: string, value: any): void => {
    if (!isEqual(UnidataStore.data[name], value) || !UnidataStore.state[name]) {
      UnidataStore.data[name] = Array.isArray(value) ? [...value] : value
      updateDataState({ [name]: value })
    }
  }

  const add = (name: string, value: any): void => {
    const d = UnidataStore.data[name]

    if (!Array.isArray(d)) {
      put(name, value)
    } else {
      put(name, [...d, value])
    }
  }
  const remove = (name: string, filter: FilterFn, forced = false): void => {
    if (!filter && !forced) {
      throw new Error(
        'Filter is required for remove data. Unless you pass force = true'
      )
    }

    const d = UnidataStore.data[name]
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
  const update = (name: string, filter: FilterFn, value: any): void => {
    if (!filter) throw new Error('Filter is required for update data')

    const d = UnidataStore.data[name]

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
        ...UnidataStore,
        initData,
        dataSetter: {
          put,
          add,
          remove,
          update,
        },
      }}
    >
      {children}
    </UnidataContext.Provider>
  )
}

/**
 * Create application wrapper with UnidataContext.Provider included
 * @param {DataCollection} initialData Initial data, format { name: value }
 */
export const withUnidata = (initialData?: DataCollection) => (
  App: React.ElementType
) => {
  const WithUnidataApp = (props: object) => {
    const [data, setData] = useState(initialData || {})
    return (
      <UnidataProvider initialData={data} setData={setData}>
        <App {...props} />
      </UnidataProvider>
    )
  }
  WithUnidataApp.displayName = getDisplayName('Unidata', App)
  return WithUnidataApp
}
