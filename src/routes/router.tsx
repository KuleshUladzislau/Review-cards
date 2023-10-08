import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { Table, TBody, TCell, THead, THeadCell, TRow } from '@/components/ui/table/table.tsx'
import { PageNotFound } from '@/pages/page-not-found'
import { useGetDecksQuery } from '@/services/baseApi.ts'

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
    element: <Desks />,
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
  const result = useGetDecksQuery()

  console.log(result)

  return <RouterProvider router={router} />
}

function Desks() {
  const { data, error, isLoading } = useGetDecksQuery()

  return (
    <Card style={{ width: '1200px' }}>
      <Table>
        <THead>
          <TRow>
            <THeadCell>Name</THeadCell>
            <THeadCell>Cards</THeadCell>
            <THeadCell>Last Updated</THeadCell>
            <THeadCell>Created by</THeadCell>
            <THeadCell></THeadCell>
          </TRow>
        </THead>
        <TBody>
          {data?.items?.map(el => (
            <TRow key={el.id}>
              <TCell>{el.name}</TCell>
              <TCell>{el.cardsCount}</TCell>
              <TCell>{new Date(el.updated).toLocaleDateString()}</TCell>
              <TCell>{el.author.name}</TCell>
              <TCell></TCell>
            </TRow>
          ))}
        </TBody>
      </Table>
    </Card>
  )
}
