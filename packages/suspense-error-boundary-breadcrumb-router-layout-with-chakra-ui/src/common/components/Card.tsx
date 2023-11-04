import { Card as ChakraCard, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react'
import Show from './Show'

type CardProps = {
  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
}

export default function Card({ header, children, footer }: CardProps) {
  return (
    <ChakraCard>
      <CardHeader>
        <Show when={!!header} fallback={header}>
          <Heading size='md'>{header}</Heading>
        </Show>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </ChakraCard>
  )
}
