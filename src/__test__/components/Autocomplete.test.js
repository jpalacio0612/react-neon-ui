import React from 'react'
import { Autocomplete } from '../../components/Autocomplete'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('<Autocomplete />', () => {
  afterEach(cleanup)

  test('Autocomplete input should render correctly', () => {
    const { queryByPlaceholderText } = render(
      <Autocomplete placeholder='test' />
    )
    expect(queryByPlaceholderText('test')).toBeTruthy()
  })

  test('Autocomplete show the suggestions', () => {
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
})
