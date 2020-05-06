export interface ISubscribedComponentProps {
  deps: string
}

export interface IUnidataProviderProps {
  initialData: object
  setData: React.Dispatch<React.SetStateAction<object>>
}

export interface IFilterFn {
  (item: string, index?: number, array?: Array<any>): boolean
}

export interface IUnidataContext {
  dataSetter: {
    put: (name: string, value: any) => void
    add: (name: string, value: any) => void
    remove: (name: string, filter: IFilterFn, force?: boolean) => void
    update: (name: string, filter: IFilterFn, value: any) => void
  }
  state: object
  data: object
  initData: (value: any) => void
}

export interface IUnidataRef {
  data: object,
  state: object
}