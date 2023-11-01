import { Route } from 'react-router-dom'
import DashboardLayout from '~/app/dashboard/Layout'
import DashboardPage from '~/app/dashboard/Page'

const dashboardRouter = (
  <Route path='dashboard/*'>
    <Route element={<DashboardLayout />}>
      <Route index element={<DashboardPage />} />
    </Route>
  </Route>
)

export default dashboardRouter
