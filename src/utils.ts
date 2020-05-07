import shortid from 'shortid'
import { mapValues } from 'lodash'
import { IFilterFn } from './types'

export const getFilterFunction = (filter: IFilterFn): IFilterFn =>
  typeof filter === 'function'
    ? filter
    : (item: any) =>
        Object.keys(filter).every(
          (k) => item[k] !== undefined && filter[k] === item[k]
        )

export const generateDataState = (newData: object) =>
  mapValues(newData, () => shortid.generate())

export const getDisplayName = (
  prefix: string,
  Component: React.ElementType
) => {
  return `${prefix}${
    (Component as React.FC).displayName ||
    (Component as React.FC).name ||
    'Component'
  }`
}
