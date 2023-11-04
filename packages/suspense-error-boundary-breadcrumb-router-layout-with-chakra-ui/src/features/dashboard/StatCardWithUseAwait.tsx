import { StatGroup } from '@chakra-ui/react'
import StatBox from '~/common/components/StatBox'
import { getStatListWithoutWrapPromise } from '~/common/lib/api/stat'
import useAwait from '~/common/lib/useAwait'

export default function StatCardWithUseAwait() {
  const statList = useAwait('/stat-list', getStatListWithoutWrapPromise)

  return (
    <StatGroup>
      {statList.map((stat, index) => (
        <StatBox stat={stat} key={index} />
      ))}
    </StatGroup>
  )
}
