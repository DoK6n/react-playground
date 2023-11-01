import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import * as f from '~/common/lib/f.css'

export default function LoginLayout() {
  return (
    <Block>
      <Outlet />
    </Block>
  )
}

const Block = styled.main`
  width: 100vw;
  height: 100vh;
  ${f.flexJustifyAlignCenter}
`
