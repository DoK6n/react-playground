import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('/dashboard', () => {
    return HttpResponse.json({ data: { count: 1 } })
  }),
]
