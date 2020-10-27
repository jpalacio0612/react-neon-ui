import React from 'react'
import { Select } from '../../components/Select'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('<Select />', () => {
  afterEach(cleanup)

  test('should render correctly with options', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} />
    )
    expect(queryByText('select')).toBeTruthy()
    expect(queryByText('small')).toBeTruthy()
    expect(queryByText('medium')).toBeTruthy()
    expect(queryByText('large')).toBeTruthy()
  })

  test('Value should changes correctly', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} />
    )
    const select = queryByText('select')
    fireEvent.click(queryByText('small'))
    expect(select.value).toBe('small')
  })

  test('select should handle multiple choises', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} multiple />
    )
    const select = queryByText('select')
    fireEvent.click(queryByText('small'))
    fireEvent.click(queryByText('medium'))
    expect(select.value).toBe('small&medium')
  })

  test('select should handle unselect choises', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} multiple />
    )
    const select = queryByText('select')
    fireEvent.click(queryByText('small'))
    fireEvent.click(queryByText('medium'))
    fireEvent.click(queryByText('small'))
    expect(select.value).toBe('medium')
  })
})
