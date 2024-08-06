import { LoginView } from '../views/LoginView/LoginView'
import { DetailView } from '../views/DetailView/DetailView'
import { HomeView } from '../views/HomeView/HomeView'
import { CreateEditView } from '../views/CreateEditView/CreateEditView'
import { RoleEnum } from '../shared/enums/role.enum'

export const ALL_ROUTES = [
  {
    name: '/',
    component: HomeView,
    validateRole: [RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.GUEST],
  },
  {
    name: '/detail/:id',
    component: DetailView,
    validateRole: [RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.GUEST],
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
