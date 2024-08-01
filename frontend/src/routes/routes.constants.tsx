import { LoginView } from '../views/LoginView/LoginView.tsx'
import { EditView } from '../views/EditView/EditView.tsx'
import { DetailView } from '../views/DetailView/DetailView.tsx'
import { HomeView } from '../views/HomeView/HomeView.tsx'

export const ALL_ROUTES = [
  {
    name: '/',
    component: HomeView,
  },
  {
    name: '/detail/:id',
    component: DetailView,
  },
  {
    name: '/edit',
    component: EditView,
  },
]

export const PUBLIC_ROUTES = [
  {
    name: '/',
    component: LoginView,
  },
]
