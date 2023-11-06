import { StatGroup } from '@chakra-ui/react'
import StatBox, { Stat } from '~/common/components/StatBox'
import useSWR from 'swr'
import { getStatListWithoutWrapPromise } from '~/common/lib/api/stat'

export default function StatCardWithSWR() {
  const { data: statList } = useSWR<Stat[]>('/stat-list', getStatListWithoutWrapPromise, {
    suspense: true,
  })

  return (
    <StatGroup>
      {statList?.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
