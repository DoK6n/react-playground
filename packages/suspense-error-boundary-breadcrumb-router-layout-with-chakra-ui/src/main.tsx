import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SWRConfig } from 'swr'

async function deferRender() {
  if (import.meta.env.PROD) {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start({
    serviceWorker: {
      options: {
        scope: '/',
      },
    },
    onUnhandledRequest: 'bypass',
  })
}

const queryClient = new QueryClient()

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <SWRConfig
            value={{
              fetcher: (resource, init) =>
                fetch(resource, init).then(res => res.json().then(res => res.data)),
              suspense: true,
            }}
          >
            <RouterProvider router={router} />
          </SWRConfig>
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>,
  )
})
