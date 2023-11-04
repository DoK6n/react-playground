import { Stat } from '~/common/components/StatBox'
import { wrapPromise } from '../wrapPromise'

export interface ApiResponse<T> {
  data: T
}

export const getStatList = () => {
  const promise = fetch('http://localhost:3000/stat-list')
    .then(res => res.json())
    .then((res: ApiResponse<Stat[]>) => res.data)

  return {
    statList: wrapPromise<Stat[]>(promise),
  }
}
