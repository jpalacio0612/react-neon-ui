import React from 'react'
import { Select } from '../../components/Select'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('<Select />', () => {
  afterEach(cleanup)

  test('Select should render correctly', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} />
    )
    expect(queryByText('select')).toBeTruthy()
    expect(queryByText('small')).toBeTruthy()
    expect(queryByText('medium')).toBeTruthy()
    expect(queryByText('large')).toBeTruthy()
  })

  test('Value changes correctly', () => {
    const { queryByText } = render(
      <Select label='select' options={['small', 'medium', 'large']} />
    )
    const select = queryByText('select')
    fireEvent.click(queryByText('small'))
    expect(select.value).toBe('small')
  })
})
