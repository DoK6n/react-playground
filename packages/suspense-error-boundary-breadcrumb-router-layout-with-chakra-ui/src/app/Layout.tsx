import { Outlet } from 'react-router-dom'
import SidebarWithHeader from '~/common/components/SidebarWithHeader'

export default function RootLayout() {
  return (
    <SidebarWithHeader>
      <Outlet />
    </SidebarWithHeader>
  )
}
