import { useSelector } from 'react-redux'

import { render } from '@testing-library/react'

import App from '../src/App'

import tasks from '../fixtures/tasks'

jest.mock('react-redux')


describe('Renders main element', () => {
  ;(useSelector as jest.Mock).mockImplementation(selector =>
    selector({
      tasks,
    }),
  )

  it('renders tasks', () => {
    const { container } = render(<App />)

    expect(container).toHaveTextContent('아무 일도 하기 싫다')
  })
})
