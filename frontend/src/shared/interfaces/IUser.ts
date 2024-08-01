import { RoleEnum } from '../enums/role.enum.ts'

export interface IUser {
  id: string
  email: string
  name: string
  role: RoleEnum
  token: string
}
