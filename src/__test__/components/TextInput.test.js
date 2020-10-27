import React from 'react'

import { render, fireEvent, cleanup } from '@testing-library/react'
import { TextInput } from '../../components/TextInput/TextInput'

describe('<TextInput />', () => {
  afterEach(cleanup)

  test('should render correctly with placeholder', () => {
    const { queryByPlaceholderText } = render(<TextInput placeholder='test' />)
    expect(queryByPlaceholderText('test')).toBeTruthy()
  })

  test('Onchange should be handled correctly', () => {
    const { queryByPlaceholderText } = render(<TextInput placeholder='test' />)
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
