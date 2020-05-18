export type SubscribedComponentProps = {
  deps: string
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
  state: DataStateCollection
  data: DataCollection
}

export type UnidataType = {
  data: DataCollection
  state: DataStateCollection
}

type InitAction = {
  type: 'init'
  data: DataCollection
}
type PutAction = {
  type: 'put'
  name: string
  value: any
}

type AddAction = {
  type: 'add'
  name: string
  value: any
}

type UpdateAction = {
  type: 'update'
  name: string
  filter: FilterFn
  value: any
}

type RemoveAction = {
  type: 'remove'
  name: string
  filter: FilterFn
  forced?: boolean
}

export type UnidataAction =
  | InitAction
  | AddAction
  | PutAction
  | UpdateAction
  | RemoveAction
