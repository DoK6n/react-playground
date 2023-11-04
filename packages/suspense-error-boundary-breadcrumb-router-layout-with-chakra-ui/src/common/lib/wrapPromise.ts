const Status = {
  success: 'success',
  error: 'error',
  pending: 'pending',
} as const

type Status = (typeof Status)[keyof typeof Status]

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: Status = Status.pending
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let response: T

  const suspender = promise.then(
    res => {
      status = Status.success
      response = res
    },
    err => {
      status = Status.error
      response = err
    },
  )
  return {
    read: () => {
      switch (status) {
        case 'pending':
          throw suspender
        case 'error':
          throw response
        case 'success':
          return response
      }
    },
  }
}
