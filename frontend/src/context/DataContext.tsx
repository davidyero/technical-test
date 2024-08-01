import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { IProducts } from '../shared/interfaces/IProducts.ts'

export interface DataContextInterface {
  products: IProducts[]
}
const defaultState: DataContextInterface = {
  products: [],
}
export interface DataContextProps {
  children: React.ReactNode
}

const DataContext = createContext({
  data: defaultState,
  setData: {} as Dispatch<SetStateAction<DataContextInterface>>,
})

const DataContextProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState<DataContextInterface>(defaultState)

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
