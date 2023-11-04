import { StatGroup } from '@chakra-ui/react'
import StatBox, { Stat } from '~/common/components/StatBox'
import { fetcher } from '~/common/lib/fetchData'
import use from '~/common/lib/use'

export default function StatCardWithUse() {
  const statList = use<Stat[]>(fetcher('/stat-list'))

  return (
    <StatGroup>
      {statList.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
