export type SubscribedComponentProps = {
  deps: string
}

/**
 * UnidataContext.Provider props
 * @typedef {Object} UnidataProviderProps
 * @property {DataCollection} initialData
 * @property {React.Dispatch<React.SetStateAction<DataCollection>>} setData Set global data's state
 */
export type UnidataProviderProps = {
  initialData: DataCollection
  setData: React.Dispatch<React.SetStateAction<DataCollection>>
}

export type FilterFn = (item: any, index?: number, array?: Array<any>) => boolean

/**
 * Data storage
 * @typedef {Object} DataCollection
 */
export type DataCollection = { [name: string]: any }

export type DataStateCollection = {[name:string]: string}

export type UnidataContextType = {
  dataSetter: {
    put: (name: string, value: any) => void
    add: (name: string, value: any) => void
    remove: (name: string, filter: FilterFn, force?: boolean) => void
    update: (name: string, filter: FilterFn, value: any) => void
  }
  state: DataStateCollection
  data: DataCollection
  initData: (data: DataCollection) => void
}

export type UnidataRef = {
  data: DataCollection
  state: DataStateCollection
}
