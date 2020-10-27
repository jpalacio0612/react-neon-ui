import React from 'react'
import { Button } from '../../components/Button'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('<Button />', () => {
  afterEach(cleanup)

  test('should render correctly with children', () => {
    const { queryByText } = render(<Button>Click me</Button>)
    expect(queryByText('Click me')).toBeTruthy()
  })

  test('Onclick should be handled correctly', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })

  test('Onclick should not fire when disabled', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    )
    fireEvent.click(getByText('Click me'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
