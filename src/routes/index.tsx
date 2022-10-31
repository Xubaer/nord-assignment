import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'
import auth from '@/utils/auth'
import { protectedRoutes } from './protected'
import { Landing } from '@/features/misc'

export function AppRoutes() {
  const commonRoutes = [{ path: '/', element: <Landing /> }]
  const routes = auth.getUser() ? protectedRoutes : publicRoutes

  const element = useRoutes([...commonRoutes, ...routes])
  return element
}
