import React from 'react'
import { Button } from '../../components/Button'
import { shallow } from 'enzyme'

describe('<Button />', () => {
  test('Button should be rendered', () => {
    const button = shallow(<Button />)
    expect(button.length).toEqual(1)
  })
  test('OnClick handle properly', () => {
    const mockCallBack = jest.fn()
    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>)
    button.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
