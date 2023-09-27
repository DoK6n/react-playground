import { render } from '@testing-library/react'
import App from '../src/App'

describe('Renders main element', () => {
  it('renders tasks', () => {
    const { container } = render(<App />)

    expect(container).toHaveTextContent('아무 일도 하기 싫다')
  })
})
