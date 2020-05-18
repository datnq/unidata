import React, { createContext, PropsWithChildren, useReducer } from 'react'

import { UnidataProviderProps, UnidataContextType } from './types'
import { reducer, initializer } from './reducer'

export const UnidataContext = createContext<UnidataContextType>({
  state: {},
  data: {},
  dispatch: () => {},
})
UnidataContext.displayName = 'UnidataContext'

/**
 * Wrapper of UnidataContext.Provider
 * @param {UnidataProviderProps} props
 */
export const UnidataProvider = ({
  initialData,
  children,
}: PropsWithChildren<UnidataProviderProps>) => {
  const [state, dispatch] = useReducer(reducer, initialData, initializer)

  return (
    <UnidataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UnidataContext.Provider>
  )
}
