import React from 'react'
import { Autocomplete } from '../../components/Autocomplete'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Simulate } from 'react-dom/test-utils'

describe('<Autocomplete />', () => {
  afterEach(cleanup)

  test('Should render correctly with placeholder', () => {
    const { queryByPlaceholderText } = render(
      <Autocomplete placeholder='test' />
    )
    expect(queryByPlaceholderText('test')).toBeTruthy()
  })

  test('Should show the suggestions', () => {
    const { queryByPlaceholderText, queryByText } = render(
      <Autocomplete
        placeholder='test'
        suggestions={['cat', 'caiman', 'bird']}
      />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'c' } })
    expect(queryByText('cat')).toBeTruthy()
    expect(queryByText('caiman')).toBeTruthy()
  })

  test('It should work to select a value', () => {
    const { queryByPlaceholderText, queryByText } = render(
      <Autocomplete
        placeholder='test'
        suggestions={['cat', 'caiman', 'bird']}
      />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'c' } })
    fireEvent.click(queryByText('cat'))
    expect(input.value).toBe('cat')
  })

  test('ArrowDown, ArrowUp and Enter should work to select a value', () => {
    const { queryByPlaceholderText } = render(
      <Autocomplete
        placeholder='test'
        suggestions={['cat', 'caiman', 'bird']}
      />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'c' } })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'ArrowUp', keyCode: 38, which: 38 })
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 })
    expect(input.value).toBe('cat')
  })

  test('ArrowDown, should have limits', () => {
    const { queryByPlaceholderText } = render(
      <Autocomplete
        placeholder='test'
        suggestions={['cat', 'caiman', 'bird']}
      />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'c' } })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'ArrowDown', keyCode: 40, which: 40 })
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 })
    expect(input.value).toBe('caiman')
  })

  test('ArrowUp, should have limits', () => {
    const { queryByPlaceholderText } = render(
      <Autocomplete
        placeholder='test'
        suggestions={['cat', 'caiman', 'bird']}
      />
    )
    const input = queryByPlaceholderText('test')
    fireEvent.change(input, { target: { value: 'c' } })
    Simulate.keyDown(input, { key: 'ArrowUp', keyCode: 38, which: 38 })
    Simulate.keyDown(input, { key: 'ArrowUp', keyCode: 38, which: 38 })
    Simulate.keyDown(input, { key: 'ArrowUp', keyCode: 38, which: 38 })
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 })
    expect(input.value).toBe('cat')
  })
})
