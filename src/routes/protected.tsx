import { Navigate, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Loading } from '@/components/Loading'
import { MainLayout } from '@/components/MainLayout'

const ServerRoutes = lazy(() => import('@/features/servers'))

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/app/*',
    element: <App />,
    children: [
      { index: true, element: <ServerRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
]
