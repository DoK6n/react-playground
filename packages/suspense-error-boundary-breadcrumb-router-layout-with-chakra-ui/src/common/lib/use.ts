type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

interface ExtendedPromise<T> extends Promise<T> {
  status: PromiseStatus
  value?: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reason?: any
}

export default function use<T>(promise: Promise<T>): T {
  const extendedPromise = promise as ExtendedPromise<T>
  if (extendedPromise.status === 'fulfilled') {
    return extendedPromise.value!
  } else if (extendedPromise.status === 'rejected') {
    throw extendedPromise.reason
  } else if (extendedPromise.status === 'pending') {
    throw extendedPromise
  } else {
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
    throw extendedPromise
  }
}
