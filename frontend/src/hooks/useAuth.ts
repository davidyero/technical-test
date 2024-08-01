import { loginService } from '../services/auth.ts'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'
import { useLocalStorage } from './useLocalStorage.ts'

export const useAuth = () => {
  const { setAuth } = useContext(AuthContext)
  const { clear } = useLocalStorage()
  const login = async (email: string, password: string) => {
    return await loginService(email, password)
  }

  const logout = () => {
    setAuth({
      isGuess: false,
      isLogged: false,
    })
    clear()
  }

  return {
    login,
    logout,
  }
}
