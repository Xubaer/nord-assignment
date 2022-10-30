import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'
import auth from '@/utils/auth'
import { protectedRoutes } from './protected'

export function AppRoutes() {
  const routes = auth.getUser() ? protectedRoutes : publicRoutes

  const element = useRoutes(routes)
  return element
}
