import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { IUser } from '../shared/interfaces/IUser'

export interface AuthContextInterface {
  isLogged: boolean
  isGuest: boolean
  user?: IUser
}
const defaultState: AuthContextInterface = {
  isLogged: false,
  isGuest: false,
}
export interface AuthContextProps {
  children: React.ReactNode
}

const AuthContext = createContext({
  auth: defaultState,
  setAuth: {} as Dispatch<SetStateAction<AuthContextInterface>>,
})

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [auth, setAuth] = useState<AuthContextInterface>(defaultState)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
