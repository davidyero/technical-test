import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { IProducts } from '../shared/interfaces/IProducts.ts'
import { IModal } from '../shared/interfaces/IModal.ts'
import { IFeatureFlags } from '../shared/mocks/featureFlags.mocks.ts'

export interface DataContextInterface {
  products: IProducts[]
  modal: IModal
  featureFlags: IFeatureFlags
}
const defaultState: DataContextInterface = {
  products: [],
  modal: {
    isOpen: false,
    title: '',
    message: '',
    textCancel: '',
    textConfirm: '',
    onConfirm: () => {},
    onCancel: () => {},
    children: null,
  },
  featureFlags: {
    INTERNATIONALIZATION: false,
    EDIT_PRODUCT: false,
    REMOVE_PRODUCT: false,
    CREATE_PRODUCT: false,
  },
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
