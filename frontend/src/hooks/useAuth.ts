import { loginService } from '../services/auth'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useLocalStorage } from './useLocalStorage'

export const useAuth = () => {
  const { setAuth } = useContext(AuthContext)
  const { clear } = useLocalStorage()
  const login = async (email: string, password: string) => {
    return await loginService(email, password)
  }

  const logout = () => {
    setAuth({
      isGuest: false,
      isLogged: false,
    })
    clear()
  }

  return {
    login,
    logout,
  }
}
