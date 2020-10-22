import React from 'react'
import { TextInput } from '../../components/TextInput'
import { shallow } from 'enzyme'

describe('<TextInput />', () => {
  test('TextInput should be rendered', () => {
    const textInput = shallow(<TextInput />)
    expect(textInput.length).toEqual(1)
  })
  test('should call onChange prop', () => {
    const onChangeMock = jest.fn()
    const event = 'Only for test'
    const textInput = shallow(<TextInput onChange={onChangeMock} />)
    textInput.simulate('change', event)
    expect(onChangeMock).toBeCalledWith('Only for test')
  })
})
