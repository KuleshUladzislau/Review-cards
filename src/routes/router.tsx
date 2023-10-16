import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { CheckEmail } from '@/components/auth/check-email'
import { CreateNewPasswordPage } from '@/pages/auth/create-new-password-page/create-new-password-page.tsx'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password-page'
import { SignInPage } from '@/pages/auth/sign-in-page/SignInPage.tsx'
import { SignUpPage } from '@/pages/auth/sign-up-page'
import { Cards } from '@/pages/cards'
import { Decks } from '@/pages/decks'
import { Layout } from '@/pages/Layout/layout.tsx'
import { PageNotFound } from '@/pages/page-not-found'
import { Profile } from '@/pages/profile/profile.tsx'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { LearnCardsPage } from '@/pages/learn-cards-page/learn-cards-page.tsx'


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
            element: <Decks />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/decks/:id?',
            element: <div style={{ marginTop: '300px' }}>Decks</div>,
          },
          {
            path: '/cards/:id?',
            element: <Cards />,
          },
          {
            path: 'decks/learn/:cardsId?',
            element: <LearnCardsPage />,
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
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/reset-password/:token',
        element: <CreateNewPasswordPage />,
      },
      {
        path: '/check-email/:email',
        element: <CheckEmail />,
      },
    ],
  },
])

export const Router = () => {
  const {} = useGetMeQuery()

  return <RouterProvider router={router} />
}
