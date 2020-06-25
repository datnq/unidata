export type SubscribedComponentProps = {
  state: string
}

/**
 * UnidataContext.Provider props
 * @typedef {Object} UnidataProviderProps
 * @property {DataCollection} initialData
 */
export type UnidataProviderProps = {
  initialData: DataCollection
}

export type FilterFn = (
  item: any,
  index?: number,
  array?: Array<any>
) => boolean

/**
 * Data storage
 * @typedef {Object} DataCollection
 */
export type DataCollection = { [name: string]: any }

export type DataStateCollection = { [name: string]: string }

export type UnidataContextType = {
  dispatch: React.Dispatch<UnidataAction>
  store: UnidataType
}

export type UnidataType = {
  data: DataCollection
  state: DataStateCollection
}

export type UnidataAction = {
  type: string
  payload: any
}
