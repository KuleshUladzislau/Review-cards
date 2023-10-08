import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { SignInPage } from '@/pages/auth/sign-in-page/SignInPage.tsx'
import { SignUpPage } from '@/pages/auth/sign-up-page'
import { Layout } from '@/pages/Layout/layout.tsx'
import { PageNotFound } from '@/pages/page-not-found'
import { useGetMeQuery } from '@/services/auth/authService.ts'


function PrivateRoutes() {
  const { data, isLoading } = useGetMeQuery()

  const isAuthenticated = !!data

  if (isLoading) return <div>loading</div>

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: '/*',
            element: <PageNotFound />,
          },
          {
            path: '/',
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
        ],
      },
      {
        path: '/login',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])

export const Router = () => {
  const { isLoading } = useGetMeQuery()

  if (isLoading) return <div>loading...</div>

  return <RouterProvider router={router} />
}
