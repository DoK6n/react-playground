import { StatGroup } from '@chakra-ui/react'
import StatBox, { Stat } from '~/common/components/StatBox'

interface StatCardProps {
  resource: {
    statList: {
      read: () => Stat[]
    }
  }
}

export default function StatCard({ resource }: StatCardProps) {
  const statList = resource.statList.read()

  return (
    <StatGroup>
      {statList.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
