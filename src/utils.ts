import shortid from 'shortid'
import { mapValues } from 'lodash'
import { DataCollection, DataStateCollection } from './types'

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
