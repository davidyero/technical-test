import { RoleEnum } from '../enums/role.enum'
import { IUser } from '../interfaces/IUser'

export const USER_JULIAN: IUser = {
  id: 'ABCD1234',
  email: 'julian@gmail.com',
  name: 'Julian',
  role: RoleEnum.USER,
  token: '1234567890',
}

export const USER_TATIANA: IUser = {
  id: 'EFGH5678',
  email: 'tatiana@gmail.com',
  name: 'Tatiana',
  role: RoleEnum.ADMIN,
  token: '0987654321',
}
