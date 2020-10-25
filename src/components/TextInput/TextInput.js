import React from 'react'
import { StyledTextInput } from './StyledTextInput'
import PropTypes from 'prop-types'

export const TextInput = React.forwardRef(function TextInput(props, ref) {
  const { children, placeholder, onChange, disabled, ...otherProps } = props

  return (
    <StyledTextInput
      placeholder={placeholder}
      onChange={disabled ? undefined : onChange}
      isDisabled={disabled}
      ref={ref}
      {...otherProps}
    />
  )
})

TextInput.propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string
}

TextInput.defaultProps = {
  onChange: () => {},
  variant: 'primary',
  size: 'medium',
  placeholder: ''
}

TextInput.displayName = 'TextInput'
