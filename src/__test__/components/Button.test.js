import React from 'react'
import { Button } from '../../components/Button'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('<Button />', () => {
  afterEach(cleanup)

  test('button renders with correct children', () => {
    const { queryByText } = render(<Button>Click me</Button>)
    expect(queryByText('Click me')).toBeTruthy()
  })

  test('OnClick handle properly', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
})
