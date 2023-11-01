import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <Button>
      <Link to='/dashboard'>로그인</Link>
    </Button>
  )
}
