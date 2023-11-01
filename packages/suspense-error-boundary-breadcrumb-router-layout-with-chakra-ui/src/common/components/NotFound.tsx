import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useGoBack } from '../hooks/useGoBack'
import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom'

type NotFoundProps = {
  /** default is `reload` */
  buttonType?: 'reload' | 'goBack' | 'goHome'
}

export default function NotFound({ buttonType = 'reload' }: NotFoundProps) {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  const goBack = useGoBack()
  const navigate = useNavigate()

  const buttons = {
    reload: (
      <Button
        colorScheme='teal'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='solid'
        onClick={() => window.location.reload()}
      >
        새로고침
      </Button>
    ),
    goBack: (
      <Button
        colorScheme='teal'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='outline'
        onClick={() => goBack()}
      >
        뒤로가기
      </Button>
    ),
    goHome: (
      <Button
        colorScheme='teal'
        bgGradient='linear(to-r, teal.400, teal.500, teal.600)'
        color='white'
        variant='outline'
        onClick={() => navigate('/')}
      >
        홈으로
      </Button>
    ),
  }

  return (
    <Box textAlign='center' py={10} px={6}>
      <Heading
        display='inline-block'
        as='h2'
        size='2xl'
        bgGradient='linear(to-r, teal.400, teal.600)'
        backgroundClip='text'
      >
        404
      </Heading>
      <Text fontSize='18px' mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        {errorMessage}
      </Text>

      {buttons[buttonType]}
    </Box>
  )
}
