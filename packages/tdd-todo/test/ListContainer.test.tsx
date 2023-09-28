import { useSelector } from 'react-redux'

import { render } from '@testing-library/react'

import ListContainer from '../src/ListContainer'

import tasks from '../fixtures/tasks'

jest.mock('react-redux')

describe('ListContainer', () => {
  ;(useSelector as jest.Mock).mockImplementation(selector =>
    selector({
      tasks,
    }),
  )

  it('renders tasks', () => {
    const { container } = render(<ListContainer />)

    expect(container).toHaveTextContent('아무 일도 하기 싫다')
  })
})
