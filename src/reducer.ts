import { DataCollection, UnidataType, UnidataAction } from './types'
import { generateDataState } from './utils'

export const initializer = (initialData: DataCollection) => {
  return { data: initialData, state: generateDataState(initialData) }
}

const updater = (unidata: UnidataType, newData: DataCollection) => {
  return {
    data: {
      ...unidata.data,
      ...newData,
    },
    state: {
      ...unidata.state,
      ...generateDataState(newData),
    },
  }
}

export const reducer = (
  unidata: UnidataType,
  action: UnidataAction
): UnidataType => {
  const updatedData = action(unidata.data)
  return updater(unidata, updatedData)
}
