import React, { useEffect, useState } from 'react'
import { StyledNumberInput } from './StyledNumberInput'
import PropTypes from 'prop-types'

export const NumberInput = React.forwardRef(function NumberInput(props, ref) {
  const {
    placeholder,
    onChange,
    disabled,
    value,
    formatted,
    ...otherProps
  } = props

  const [newvalue, setNewValue] = useState(value)

  useEffect(() => {
    const e = {
      target: {
        value: newvalue
      }
    }
    onChange(e)
  }, [newvalue])

  const formatter = (value) => {
    value = value.replace(/\D/g, '')
    if (value === '') return ''

    if (!formatted) return value

    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if (formatted === 'currency') value = value !== '' ? `$${value}` : ''

    return value
  }

  const handleInputChange = (e) => setNewValue(formatter(e.target.value))

  return (
    <>
      <StyledNumberInput
        placeholder={placeholder}
        onChange={handleInputChange}
        isDisabled={disabled}
        ref={ref}
        value={newvalue}
        {...otherProps}
      />
    </>
  )
})

NumberInput.propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  formatted: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

NumberInput.defaultProps = {
  onChange: () => {},
  variant: 'primary',
  size: 'medium',
  placeholder: '',
  value: '',
  formatted: false
}

NumberInput.displayName = 'NumberInput'
