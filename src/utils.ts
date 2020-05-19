import shortid from 'shortid'
import { mapValues } from 'lodash'
import { FilterFn, DataCollection, DataStateCollection } from './types'

export const getFilterFunction = (filter: FilterFn): FilterFn =>
  typeof filter === 'function'
    ? filter
    : (item: any) =>
        Object.keys(filter).every(
          (k) => item[k] !== undefined && filter[k] === item[k]
        )

export const generateDataState = (
  newData: DataCollection
): DataStateCollection =>
  mapValues(newData, () => shortid.generate()) as DataStateCollection

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
