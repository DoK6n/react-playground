import { f } from '~/common/lib/f.css'
import styled from '@emotion/styled'
import Card from '~/common/components/Card'
import StatBox, { Stat } from '~/common/components/StatBox'
import { StatGroup } from '@chakra-ui/react'

const statList: Stat[] = [
  { label: 'Sent', num: 345670, dailyPercentChange: 23.36 },
  { label: 'Clicked', num: 45, dailyPercentChange: -9.05 },
  { label: 'Sent', num: 345670, dailyPercentChange: 23.36 },
  { label: 'Clicked', num: 45, dailyPercentChange: -9.05 },
  { label: 'Sent', num: 345670, dailyPercentChange: 23.36 },
  { label: 'Clicked', num: 45, dailyPercentChange: -9.05 },
]

export default function DashboardPage() {
  return (
    <Block>
      <Card
        header='throw promise - suspense, react-error-boundary, fetch'
        hasHeading
        body={
          <StatGroup>
            {statList.map(stat => (
              <StatBox stat={stat} />
            ))}
          </StatGroup>
        }
      />
      <Card
        header='throw promise - suspense, class error boundary, fetch'
        hasHeading
        body={
          <StatGroup>
            {statList.map(stat => (
              <StatBox stat={stat} />
            ))}
          </StatGroup>
        }
      />
      <Card
        header='use - suspense, class error boundary, fetch'
        hasHeading
        body={
          <StatGroup>
            {statList.map(stat => (
              <StatBox stat={stat} />
            ))}
          </StatGroup>
        }
      />
      <Card
        header='react-query - suspense, react-error-boundary, fetch'
        hasHeading
        body={
          <StatGroup>
            {statList.map(stat => (
              <StatBox stat={stat} />
            ))}
          </StatGroup>
        }
      />
      <Card
        header='swr - suspense, react-error-boundary, fetch'
        hasHeading
        body={
          <StatGroup>
            {statList.map(stat => (
              <StatBox stat={stat} />
            ))}
          </StatGroup>
        }
      />
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
