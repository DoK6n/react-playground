import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

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

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  )
})
