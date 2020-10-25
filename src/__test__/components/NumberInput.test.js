import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { NumberInput } from '../../components/NumberInput'

describe('<NumberInput />', () => {
  afterEach(cleanup)

  test('NumberInput renders with placeholder', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    expect(queryByPlaceholderText('test')).toBeTruthy()
  })

  test('OnChange handle properly', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1234' } })
    expect(input.value).toBe('1234')
  })

  test('Only allow numbers', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).not.toBe('test')
  })

  test('must be formatted as a number', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput formatted='number' placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input.value).toBe('1,000,000')
  })

  test('must be formatted as a currency', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput formatted='currency' placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input.value).toBe('$1,000,000')
  })
})
