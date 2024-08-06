import { RoleEnum } from '../enums/role.enum'

export interface IUser {
  id: string
  email: string
  name: string
  role: RoleEnum
  token: string
}
