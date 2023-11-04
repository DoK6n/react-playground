import {
  Stat as ChakraStat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import Show from './Show'
import { useMemo } from 'react'

export type Stat = {
  label: string
  num: number
  dailyPercentChange: number
}

type StatProps = {
  stat: Stat
}

export default function StatBox({ stat }: StatProps) {
  const isPositive = useMemo(() => stat.dailyPercentChange >= 0, [])

  return (
    <ChakraStat >
      <StatLabel>{stat.label}</StatLabel>
      <StatNumber>{stat.num.toLocaleString()}</StatNumber>
      <StatHelpText>
        <Show when={isPositive} fallback={<StatArrow type='decrease' />}>
          <StatArrow type='increase' />
        </Show>
        <Show when={isPositive} fallback={Math.abs(stat.dailyPercentChange)}>
          {stat.dailyPercentChange}%
        </Show>
      </StatHelpText>
    </ChakraStat>
  )
}
