type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

interface ExtendedPromise<T> extends Promise<T> {
  status: PromiseStatus
  value?: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reason?: any
}

// eslint-disable-next-line prefer-const
let cache = new Map()

function createExtendedPromise<T>(promise: Promise<T>): ExtendedPromise<T> {
  const extendedPromise = promise as ExtendedPromise<T>
  extendedPromise.status = 'pending'
  extendedPromise.then(
    result => {
      extendedPromise.status = 'fulfilled'
      extendedPromise.value = result
    },
    reason => {
      extendedPromise.status = 'rejected'
      extendedPromise.reason = reason
    },
  )
  return extendedPromise
}

export default function useAwait<T>(url: string, fetcher: (url: string) => Promise<T>): T {
  if (!cache.has(url)) {
    const promise = fetcher(url)
    const extendedPromise = createExtendedPromise(promise)
    cache.set(url, extendedPromise)
  }

  const extendedPromise = cache.get(url)!

  switch (extendedPromise.status) {
    case 'fulfilled':
      return extendedPromise.value!
    case 'rejected':
      throw extendedPromise.reason
    case 'pending':
    default:
      throw extendedPromise
  }
}
