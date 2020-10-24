import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonSelect, ContentSelect, StyledSelect } from './StyledSelect'

export const Select = React.forwardRef(function Select(props, ref) {
  const { children, options, onChange, multiple, label, ...otherProps } = props
  const [newLabel, setNewLabel] = useState(label)
  const [choices, setChoices] = useState('')

  useEffect(() => {
    const e = {
      target: {
        value: choices
      }
    }
    onChange(e)
  }, [choices])

  useEffect(() => {
    setNewLabel(choices || label)
  }, [choices, label])

  const handleMultiple = async (event) => {
    if (!choices.includes(event.target.value)) {
      choices === ''
        ? setChoices(event.target.value)
        : setChoices(choices + '&' + event.target.value)
    } else {
      const regex = new RegExp(
        String.raw`(${event.target.value}|&${event.target.value})`,
        'g'
      )
      choices === event.target.value
        ? setChoices('')
        : setChoices(choices.replace(regex, '').replace(/^[&]/, ''))
    }
  }

  const handleSingle = (event) => {
    setNewLabel(event.target.value)
    onChange(event)
  }

  return (
    <StyledSelect>
      <ButtonSelect value={newLabel} ref={ref} {...otherProps}>
        {newLabel}
      </ButtonSelect>
      <ContentSelect {...otherProps}>
        {options.map((option, index) => (
          <button
            key={index}
            value={option}
            onClick={multiple ? handleMultiple : handleSingle}
          >
            {option}
          </button>
        ))}
      </ContentSelect>
    </StyledSelect>
  )
})

Select.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  multiple: PropTypes.bool,
  label: PropTypes.string
}

Select.defaultProps = {
  size: 'medium',
  variant: 'primary',
  onChange: () => {},
  options: [],
  multiple: false,
  label: 'Select'
}

Select.displayName = 'Select'
