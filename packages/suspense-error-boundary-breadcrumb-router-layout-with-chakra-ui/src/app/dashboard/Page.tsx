import { f } from '~/common/lib/f.css'
import styled from '@emotion/styled'
import { Skeleton, StatGroup } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import StatCard from '~/features/dashboard/StatCard'
import Card from '~/common/components/Card'
import { getStatList } from '~/common/lib/api/stat'
import CustomErrorBoundary from '~/common/components/ClassErrorBoundary'

const ErrorIcon = () => (
  <StatGroup height='5.4rem'>
    <WarningTwoIcon w='20' h='20' color={'orange.500'} />
  </StatGroup>
)

const SkeletonStat = () => <Skeleton height='5.4rem' />

export default function DashboardPage() {
  return (
    <Block>
      <Card header='throw promise - suspense, react-error-boundary, fetch'>
        <ErrorBoundary fallback={<ErrorIcon />}>
          <Suspense fallback={<SkeletonStat />}>
            <StatCard resource={getStatList()} />
          </Suspense>
        </ErrorBoundary>
      </Card>
      <Card header='throw promise - suspense, custom class error boundary, fetch'>
        <CustomErrorBoundary fallback={<ErrorIcon />}>
          <Suspense fallback={<SkeletonStat />}>
            <StatCard resource={getStatList()} />
          </Suspense>
        </CustomErrorBoundary>
      </Card>
      {/* <Card header='use - suspense, class error boundary, fetch'>
        <StatCard resource={getStatList()} />
      </Card>
      <Card header='react-query - suspense, react-error-boundary, fetch'>
        <StatCard resource={getStatList()} />
      </Card>
      <Card header='swr - suspense, react-error-boundary, fetch'>
        <StatCard resource={getStatList()} />
      </Card> */}
    </Block>
  )
}

const Block = styled.div`
  ${f.flex}
  ${f.flexColumn}
  gap: 1rem;
  ${f.fullWidthHeight}
  padding: 1rem;
`
