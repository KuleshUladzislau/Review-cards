import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { Auth } from '@/pages/auth/auth-page'
import { SignUpPage } from '@/pages/auth/sign-up-page'
import { Layout } from '@/pages/Layout/layout.tsx'
import { PageNotFound } from '@/pages/page-not-found'
import { useGetMeQuery } from '@/services/auth/authService.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/forgotPassword',
    element: <div>Forgot Password</div>,
  },
  {
    path: '/forgotPassword-checkEmail',
    element: <div>Check Email</div>,
  },
  {
    path: '/createNewPassword',
    element: <div>Create New Password</div>,
  },
  {
    path: '/editeProfile',
    element: <div>Edite Profile</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
  {
    path: '/main',
    element: <div style={{ marginTop: '300px' }}>Desc</div>,
  },
  {
    path: '/profile',
    element: <div>Profile</div>,
  },
  {
    path: '/decks/:id?',
    element: <div style={{ marginTop: '300px' }}>Decks</div>,
  },
  {
    path: '/cards/:id?',
    element: <div>cards</div>,
  },
  {
    path: '/learn/:id?',
    element: <div>learn cards</div>,
  },
]

const PrivateRoutes = () => {
  const { data: me, isLoading } = useGetMeQuery()

  const isAuthenticated = !!me



  return isAuthenticated ? <Layout /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  const { data } = useGetMeQuery()

  return (
    <>
      {!!data && <Header />}
      <RouterProvider router={router} />
    </>
  )
}
