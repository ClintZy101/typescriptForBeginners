import React from 'react'
import { createContext } from 'react'
import { namelist } from '../../data/data'

type FamilyContextProviderProps = {
    children: React.ReactNode
}

export const FamilyContext = createContext(namelist)


export const FamilyContextProvider = ({children}: FamilyContextProviderProps) => {
  return <FamilyContext.Provider value={namelist}>{children}</FamilyContext.Provider>
}
