import { isEqual } from 'lodash'
import { DataCollection, UnidataType } from './types'
import { generateDataState, getFilterFunction } from './utils'

export const initializer = (initialData: DataCollection) => {
  return { data: initialData, state: generateDataState(initialData) }
}

export const reducer = (unidata: UnidataType, action: any): UnidataType => {
  const { type, name, value, filter, forced, data } = action
  const d = unidata.data[name]
  const newData = { ...data, ...unidata.data }

  const put = (name: string, value: any) =>
    !isEqual(unidata.data[name], value) || !unidata.state[name]
      ? initializer({
          ...unidata.data,
          [name]: Array.isArray(value) ? [...value] : value,
        })
      : unidata

  switch (type) {
    case 'init':
      return !isEqual(Object.keys(newData), Object.keys(unidata.data))
        ? initializer({ ...data, ...unidata.data })
        : unidata
    case 'put':
      return put(name, value)
    case 'add':
      if (!Array.isArray(d)) {
        return put(name, value)
      } else {
        return put(name, [...d, value])
      }
    case 'update':
      if (!filter) throw new Error('Filter is required for update data')

      if (!Array.isArray(d) || typeof value !== 'object') {
        return put(name, value)
      } else {
        const filterFn = getFilterFunction(filter)
        const doUpdate = (i: any, v: any) =>
          typeof i === 'object' ? { ...i, ...v } : v

        return put(
          name,
          d.map((item, index) =>
            filterFn(item, index) ? doUpdate(item, value) : item
          )
        )
      }
    case 'remove':
      if (!filter && !forced) {
        throw new Error(
          'Filter is required for remove data. Unless you pass force = true'
        )
      }

      if (!Array.isArray(d) || forced) {
        delete d[name]

        return put(name, d)
      } else {
        const filterFn = getFilterFunction(filter)

        return put(
          name,
          d.filter((item, index) => !filterFn(item, index))
        )
      }
    default:
      throw new Error()
  }
}
