import { render } from '@testing-library/react'
import List from '../src/List'
import tasks from '../fixtures/tasks'

describe('List', () => {
  it('renders tasks', () => {
    const { container } = render(<List tasks={tasks} />)

    expect(container).toHaveTextContent('아무 일도 하기 싫다')
    expect(container).toHaveTextContent('채프 가고 싶다')
  })
})
