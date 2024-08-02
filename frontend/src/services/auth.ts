import { USER_JULIAN, USER_TATIANA } from '../shared/mocks/users.mock'
import { IUser } from '../shared/interfaces/IUser'

export const loginService = async (
  email: string,
  password: string
): Promise<IUser> => {
  if (email === 'julian@gmail.com' && password === '123456') {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(USER_JULIAN)
      }, 500)
    })
  }
  if (email === 'tatiana@gmail.com' && password === '123456') {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(USER_TATIANA)
      }, 500)
    })
  }
  throw new Error('Invalid credentials')
}
