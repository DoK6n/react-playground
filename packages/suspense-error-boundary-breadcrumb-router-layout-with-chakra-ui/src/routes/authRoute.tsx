import { Navigate, Route } from 'react-router-dom'
import LoginLayout from '~/app/login/Layout'
import LoginPage from '~/app/login/Page'

const authRouter = (
  <Route path='/'>
    <Route element={<LoginLayout />}>
      <Route index element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />} />
    </Route>
  </Route>
)

export default authRouter
