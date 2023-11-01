import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from '../common/components/NotFound'
import dashboardRouter from './dashboardRoute'
import authRouter from './authRoute'
import RootLayout from '../app/Layout'
import usersRouter from './usersRoute'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound buttonType='reload' />}>
      {authRouter}
      <Route element={<RootLayout />}>
        {dashboardRouter}
        {usersRouter}
      </Route>
    </Route>,
  ),
)
