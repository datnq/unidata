export interface IFilterFn {
  (item: string, index?: number, array?: Array<any>): boolean
}

export const getFilterFunction = (filter: IFilterFn): IFilterFn =>
  typeof filter === 'function'
    ? filter
    : (item: any) =>
        Object.keys(filter).every(
          (k) => item[k] !== undefined && filter[k] === item[k]
        )
