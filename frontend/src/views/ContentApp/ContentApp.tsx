import { SuperHeader } from '../../components/molecules/SuperHeader/SuperHeader'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ALL_ROUTES, PUBLIC_ROUTES } from '../../routes/routes.constants'
import { useContext, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {
  IS_GUEST,
  USER_STORAGE,
} from '../../shared/constants/LocalStorages.constants'
import { AuthContext } from '../../context/AuthContext'
import { IUser } from '../../shared/interfaces/IUser'
import { useTranslation } from 'react-i18next'
import './Content.scss'
import { SuperModal } from '../../components/molecules/SuperModal/SuperModal'
import { DataContext } from '../../context/DataContext'
import { useFeatureFlags } from '../../hooks/useFeatureFlags'
import { RoleEnum } from '../../shared/enums/role.enum'

export const ContentApp = () => {
  const { t } = useTranslation()
  const { getFeatureFlags } = useFeatureFlags()
  const { auth, setAuth } = useContext(AuthContext)
  const { data, setData } = useContext(DataContext)
  const { getItem } = useLocalStorage()

  const validateSession = () => {
    const featureFlags = getFeatureFlags()
    const userString = getItem(USER_STORAGE)
    const isGuest = getItem(IS_GUEST) === 'true'
    setData({
      ...data,
      featureFlags,
    })
    if (userString && !isGuest) {
      const user: IUser = JSON.parse(userString)
      setAuth({
        isLogged: true,
        isGuest: false,
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
            {!auth.isGuest && (
              <label>
                {t('welcome')} {auth.user?.name}
              </label>
            )}
            {auth.isGuest && <label>{t('welcome')}</label>}
          </div>
          <Routes>
            {ALL_ROUTES.map(route => (
              <Route
                key={route.name}
                path={route.name}
                Component={
                  route.validateRole.includes(auth.user?.role as RoleEnum)
                    ? route.component
                    : () => <Navigate to='/' replace />
                }
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
      <SuperModal
        isOpen={data.modal?.isOpen}
        onRequestClose={() =>
          setData({
            ...data,
            modal: {
              ...data.modal,
              isOpen: false,
              children: null,
            },
          })
        }
      >
        {data.modal.children}
      </SuperModal>
    </>
  )
}
