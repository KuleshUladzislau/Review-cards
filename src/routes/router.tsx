import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { PageNotFound } from '@/pages/page-not-found'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/signUp',
    element: <div>Sign Up</div>,
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
    element: <div>hello</div>,
  },
  {
    path: '/*',
    element: <PageNotFound />,
  },
  {
    path: '/main',
    element: <div>Desc</div>,
  },
  {
    path: '/profile',
    element: <div>Profile</div>,
  },
  {
    path: '/desc/:id?',
    element: <div>Desc</div>,
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
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
