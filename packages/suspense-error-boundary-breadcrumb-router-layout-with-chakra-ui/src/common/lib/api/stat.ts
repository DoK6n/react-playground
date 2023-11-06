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

export const getStatListWithoutWrapPromise = async (url: string) => {
  const response = await fetch('http://localhost:3000'.concat(url))
  const { data } = (await response.json()) as unknown as ApiResponse<Stat[]>
  return data
}

export const getStatListForQueryFn = async (): Promise<Stat[]> => {
  const response = await fetch('http://localhost:3000/stat-list')
  const { data } = await response.json()
  return data
}
