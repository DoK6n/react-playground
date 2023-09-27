import { render } from '@testing-library/react'
import List from '../src/List'

describe('List', () => {
  it('renders tasks', () => {
    const tasks = [{ id: 1, title: '' }]
    const { container } = render(<List tasks={tasks} />)

    expect(container).toHaveTextContent('아무 일도 하기 싫다')
  })
})
