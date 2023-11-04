import { HttpResponse, delay, http } from 'msw'
import { Stat } from '~/common/components/StatBox'

const statList: Stat[] = [
  { label: 'Sent', num: 345670, dailyPercentChange: 23.36 },
  { label: 'Clicked', num: 45, dailyPercentChange: -9.05 },
]

export const handlers = [
  http.get('/stat-list', async () => {
    await delay(1500)
    // return HttpResponse.error()
    return HttpResponse.json({ data: statList })
  }),
]
