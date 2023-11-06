import { StatGroup } from '@chakra-ui/react'
import StatBox from '~/common/components/StatBox'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getStatListForQueryFn } from '~/common/lib/api/stat'

export default function StatCardWithReactQuery() {
  const { data: statList } = useSuspenseQuery({
    queryKey: ['statList'],
    queryFn: getStatListForQueryFn,
  })

  return (
    <StatGroup>
      {statList?.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
