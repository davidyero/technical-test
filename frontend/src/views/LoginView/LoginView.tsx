import './LoginView.scss'
import { SuperCard } from '../../components/atoms/SuperCard/SuperCard.tsx'
import { SuperButton } from '../../components/atoms/SuperButton/SuperButton.tsx'
import { SuperInput } from '../../components/atoms/SuperInput/SuperInput.tsx'
import { useAuth } from '../../hooks/useAuth.ts'
import { useContext, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.ts'
import {
  IS_GUESS,
  USER_STORAGE,
} from '../../shared/constants/LocalStorages.constants.ts'
import { AuthContext } from '../../context/AuthContext.tsx'

export const LoginView = () => {
  const { setAuth } = useContext(AuthContext)
  const { setItem } = useLocalStorage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const user = await login(email, password)
      setItem(USER_STORAGE, JSON.stringify(user))
      setItem(IS_GUESS, 'false')
      setAuth({ isLogged: true, isGuess: false, user })
    } catch (error) {
      console.error(error)
    }
  }

  const continueAsGuest = () => {
    setAuth({ isLogged: true, isGuess: true })
    setItem(IS_GUESS, 'true')
  }

  return (
    <div className='login__container'>
      <SuperCard className={'login__card'} onClick={() => {}}>
        <div className='login__container--left'>
          <label className='login__label'>Get Everything you want</label>
        </div>
        <div className='login__container--right'>
          <div className='login__form'>
            <div className='login__container-text'>
              <label className='login__container-text--title'>
                Welcome back
              </label>
            </div>
            <div className='login__container-text'>
              <label className='login__container-text--description'>
                Enter your email
              </label>
            </div>
            <SuperInput
              label={'Email'}
              className={'login__input'}
              type={'email'}
              placeholder={'Enter your email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <SuperInput
              label={'Password'}
              className={'login__input'}
              type={'password'}
              placeholder={'Enter your password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='login__container--actions'>
              <label className='login__container-text--forgot'>
                Remember me?
              </label>
              <label className='login__container-text--forgot'>
                Forgot your password?
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
                className='login__container-text--guess'
              >
                Ingresar como invitado
              </label>
            </div>
          </div>
        </div>
      </SuperCard>
    </div>
  )
}
