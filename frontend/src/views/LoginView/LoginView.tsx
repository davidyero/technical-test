import './LoginView.scss'
import { SuperCard } from '../../components/atoms/SuperCard/SuperCard.tsx'
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton.tsx'
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput.tsx'
import { useAuth } from '../../hooks/useAuth.ts'
import { useContext, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.ts'
import {
  IS_GUEST,
  USER_STORAGE,
} from '../../shared/constants/LocalStorages.constants.ts'
import { AuthContext } from '../../context/AuthContext.tsx'
import { useTranslation } from 'react-i18next'
import { RoleEnum } from '../../shared/enums/role.enum.ts'
import {useNotifications} from "../../hooks/useNotifications.ts";

export const LoginView = () => {
  const { t } = useTranslation()
  const { setAuth } = useContext(AuthContext)
  const { setItem } = useLocalStorage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { showNotification } = useNotifications()
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const user = await login(email.toLowerCase(), password)
      setItem(USER_STORAGE, JSON.stringify(user))
      setItem(IS_GUEST, 'false')
      setAuth({ isLogged: true, isGuest: false, user })
    } catch (error) {
      showNotification(t('errorLogin'), t('errorLoginMessage'), 'danger')
      console.error(error)
    }
  }

  const continueAsGuest = () => {
    setAuth({
      user: {
        role: RoleEnum.GUEST,
        id: '',
        email: '',
        name: '',
        token: '',
      },
      isLogged: true,
      isGuest: true,
    })
    setItem(IS_GUEST, 'true')
  }

  return (
    <div className='login__container'>
      <SuperCard className={'login__card'} onClick={() => {}}>
        <div className='login__container--left'>
          <label className='login__label'>{t('getEverything')}</label>
        </div>
        <div className='login__container--right'>
          <div className='login__form'>
            <div className='login__container-text'>
              <label className='login__container-text--title'>
                {t('welcomeBack')}
              </label>
            </div>
            <div className='login__container-text'>
              <label className='login__container-text--description'>
                {t('enterYourEmail')}
              </label>
            </div>
            <SuperInput
              label={t('email')}
              className={'login__input'}
              type={'email'}
              placeholder={t('enterYourEmail')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <SuperInput
              label={t('password')}
              className={'login__input'}
              type={'password'}
              placeholder={t('enterYourPassword')}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='login__container--actions'>
              <label className='login__container-text--forgot'>
                {t('rememberMe')}
              </label>
              <label className='login__container-text--forgot'>
                {t('forgotPassword')}
              </label>
            </div>
            <SuperButton
              isDisabled={email === '' || password === ''}
              text={'Login'}
              onClick={handleLogin}
            />
            <div className='login__container-text'>
              <label
                onClick={continueAsGuest}
                className='login__container-text--guest'
              >
                {t('continueAsGuest')}
              </label>
            </div>
          </div>
        </div>
      </SuperCard>
    </div>
  )
}
