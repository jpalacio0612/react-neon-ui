import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { NumberInput } from '../../components/NumberInput'

describe('<NumberInput />', () => {
  afterEach(cleanup)

  test('should render correctly with placeholder', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    expect(queryByPlaceholderText('test')).toBeTruthy()
  })

  test('Onchange should be handled correctly', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1234' } })
    expect(input.value).toBe('1234')
  })

  test('Input should only allow numbers', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).not.toBe('test')
  })

  test('should format as a number by default', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput formatted placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input.value).toBe('1,000,000')
  })

  test('should format as a number', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput formatted='number' placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input.value).toBe('1,000,000')
  })

  test('should format as a currency', () => {
    const { queryByPlaceholderText } = render(
      <NumberInput formatted='currency' placeholder='test' />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: '1000000' } })
    expect(input.value).toBe('$1,000,000')
  })
})
