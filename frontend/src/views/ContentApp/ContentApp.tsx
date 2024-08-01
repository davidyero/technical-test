import { SuperHeader } from '../../components/molecules/SuperHeader/SuperHeader.tsx'
import { Route, Routes } from 'react-router-dom'
import { ALL_ROUTES, PUBLIC_ROUTES } from '../../routes/routes.constants.tsx'
import { useContext, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.ts'
import {
  IS_GUESS,
  USER_STORAGE,
} from '../../shared/constants/LocalStorages.constants.ts'
import { AuthContext } from '../../context/AuthContext.tsx'
import { IUser } from '../../shared/interfaces/IUser.ts'
import { useTranslation } from 'react-i18next'
import './Content.scss'

export const ContentApp = () => {
  const { t } = useTranslation()
  const { auth, setAuth } = useContext(AuthContext)
  const { getItem } = useLocalStorage()

  const validateSession = () => {
    const userString = getItem(USER_STORAGE)
    const isGuess = getItem(IS_GUESS) === 'true'
    if (userString && !isGuess) {
      const user: IUser = JSON.parse(userString)
      setAuth({
        isLogged: true,
        isGuess: false,
        user,
      })
    }
  }

  useEffect(() => {
    validateSession()
  }, [])

  return (
    <>
      {auth.isLogged && (
        <>
          <SuperHeader />
          <div className='header-welcome'>
            {!auth.isGuess && (
              <label>
                {t('welcome')} {auth.user?.name}
              </label>
            )}
            {auth.isGuess && <label>{t('welcome')}</label>}
          </div>
          <Routes>
            {ALL_ROUTES.map(route => (
              <Route
                key={route.name}
                path={route.name}
                Component={route.component}
              />
            ))}
          </Routes>
        </>
      )}
      {!auth.isLogged && (
        <Routes>
          {PUBLIC_ROUTES.map(route => (
            <Route
              key={route.name}
              path={route.name}
              Component={route.component}
            />
          ))}
        </Routes>
      )}
    </>
  )
}
