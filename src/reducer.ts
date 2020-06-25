import { isEqual } from 'lodash'
import { DataCollection, UnidataType } from './types'
import { generateDataState, getFilterFunction } from './utils'

export const initializer = (initialData: DataCollection) => {
  return { data: initialData, state: generateDataState(initialData) }
}

const updater = (unidata: UnidataType, newData: DataCollection) => {
  return {
    data: {
      ...unidata.data,
      ...newData,
    },
    state: {
      ...unidata.state,
      ...generateDataState(newData),
    },
  }
}

export const reducer = (unidata: UnidataType, action: any): UnidataType => {
  const { type, payload } = action

  const { name, value } = payload
  const d = unidata.data[name]
  const filter = getFilterFunction(payload.filter)

  const put = (name: string, value: any) =>
    !isEqual(unidata.data[name], value) || !unidata.state[name]
      ? updater(unidata, { [name]: Array.isArray(value) ? [...value] : value })
      : unidata

  switch (type) {
    case 'init': {
      const newData = { ...payload.data, ...unidata.data }
      return !isEqual(Object.keys(newData), Object.keys(unidata.data))
        ? updater(unidata, newData)
        : unidata
    }
    case 'put':
      return put(name, value)
    case 'add':
      if (!Array.isArray(d)) {
        return put(name, value)
      } else {
        return put(name, [...d, value])
      }
    case 'update':
      if (!payload.filter) throw new Error('Filter is required for update data')

      if (!Array.isArray(d) || typeof value !== 'object') {
        return put(name, value)
      } else {
        const doUpdate = (i: any, v: any) =>
          typeof i === 'object' ? { ...i, ...v } : v

        return put(
          name,
          d.map((item, index) =>
            filter(item, index) ? doUpdate(item, value) : item
          )
        )
      }
    case 'remove':
      if (!payload.filter && !payload.forced) {
        throw new Error(
          'Filter is required for remove data. Unless you pass force = true'
        )
      }

      if (!Array.isArray(d) || payload.forced) {
        delete d[name]
        return put(name, d)
      } else {
        return put(
          name,
          d.filter((item, index) => !filter(item, index))
        )
      }
    default:
      throw new Error()
  }
}
