import { StatGroup } from '@chakra-ui/react'
import StatBox from '~/common/components/StatBox'
import { useQuery } from '@tanstack/react-query'
import { getStatListForQueryFn } from '~/common/lib/api/stat'

export default function StatCardWithReactQuery() {
  const { data: statList } = useQuery({
    queryKey: ['statList'],
    queryFn: getStatListForQueryFn,
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
