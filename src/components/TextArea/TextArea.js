import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextArea } from './StyledTextArea'

export const TextArea = React.forwardRef(function TextArea(props, ref) {
  const { children, placeholder, onChange, ...otherProps } = props

  return (
    <StyledTextArea
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      {...otherProps}
    />
  )
})

TextArea.propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string
}

TextArea.defaultProps = {
  onChange: () => {},
  variant: 'primary',
  size: 'medium',
  placeholder: ''
}

TextArea.displayName = 'TextArea'
