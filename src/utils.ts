import shortid from 'shortid'
import mapValues from 'lodash/mapValues'
import { IFilterFn } from './types'

export const getFilterFunction = (filter: IFilterFn): IFilterFn =>
  typeof filter === 'function'
    ? filter
    : (item: any) =>
        Object.keys(filter).every(
          (k) => item[k] !== undefined && filter[k] === item[k]
        )

export const generateDataState = (newData: object) => mapValues(newData, () => shortid.generate())
