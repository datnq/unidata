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

export const generateDataState = (currentState: object, newData: object) => {
  return {
    ...currentState,
    ...mapValues(newData, () => shortid.generate()),
  }
}
