import { Navigate, Outlet } from "react-router-dom";
import { Fallback } from "@/components/Fallback";
import { MainLayout } from "@/components/MainLayout";
import { lazy, Suspense } from "react";

const ServersList = lazy(() => import('@/features/servers'))

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '', element: <ServersList /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
]
