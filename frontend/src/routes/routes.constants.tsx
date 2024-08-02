import { LoginView } from '../views/LoginView/LoginView.tsx'
import { DetailView } from '../views/DetailView/DetailView.tsx'
import { HomeView } from '../views/HomeView/HomeView.tsx'
import { CreateEditView } from '../views/CreateEditView/CreateEditView.tsx'
import { RoleEnum } from '../shared/enums/role.enum.ts'

export const ALL_ROUTES = [
  {
    name: '/',
    component: HomeView,
    validateRole: [RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.GUEST],
  },
  {
    name: '/detail/:id',
    component: DetailView,
    validateRole: [RoleEnum.ADMIN],
  },
  {
    name: '/edit/:id',
    component: CreateEditView,
    validateRole: [RoleEnum.ADMIN],
  },
  {
    name: '/create',
    component: CreateEditView,
    validateRole: [RoleEnum.ADMIN],
  },
]

export const PUBLIC_ROUTES = [
  {
    name: '/',
    component: LoginView,
  },
]
