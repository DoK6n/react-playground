import { Route } from 'react-router-dom'
import UsersLayout from '~/app/users/Layout'
import UsersPage from '~/app/users/Page'

const usersRouter = (
  <Route path='users/*'>
    <Route element={<UsersLayout />}>
      <Route index element={<UsersPage />} />
    </Route>
  </Route>
)

export default usersRouter
