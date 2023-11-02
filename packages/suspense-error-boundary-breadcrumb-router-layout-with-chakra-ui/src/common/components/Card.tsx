import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from '@chakra-ui/react'
import Show from './Show'

type CardProps = {
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  hasHeading?: boolean
}

export default function Card({ header, body, footer, hasHeading = false }: CardProps) {
  return (
    <ChakraCard>
      <CardHeader>
        <Show when={hasHeading} fallback={header}>
          <Heading size='md'>{header}</Heading>
        </Show>
      </CardHeader>
      <CardBody>{body}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </ChakraCard>
  )
}
