import { StatGroup } from '@chakra-ui/react'
import StatBox, { Stat } from '~/common/components/StatBox'
import useSWR from 'swr'

export default function StatCardWithSWR() {
  const { data: statList } = useSWR<Stat[]>('/stat-list')

  return (
    <StatGroup>
      {statList?.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
