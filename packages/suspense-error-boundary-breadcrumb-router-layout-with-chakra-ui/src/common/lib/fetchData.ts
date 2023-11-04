import { Stat } from '../components/StatBox'
import { getStatListWithoutWrapPromise } from './api/stat'

// eslint-disable-next-line prefer-const
let cache = new Map()

export function fetcher(url: string): Promise<Stat[]> {
  if (!cache.has(url)) {
    cache.set(url, getStatListWithoutWrapPromise(url))
  }
  return cache.get(url)
}
1
