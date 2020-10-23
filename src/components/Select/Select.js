import React from 'react'
import PropTypes from 'prop-types'
import { StyledSelect } from './StyledSelect'

export const Select = React.forwardRef(function Select(props, ref) {
  const { children, options, onChange, value, ...otherProps } = props

  return (
    <StyledSelect
      ref={ref}
      value={value}
      onChange={onChange}
      options={options}
      {...otherProps}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  )
})

Select.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string
}

Select.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onChange: () => {},
  options: [],
  value: ''
}

Select.displayName = 'Select'
