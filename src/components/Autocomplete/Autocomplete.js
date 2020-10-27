import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../TextInput/TextInput'
import { OptionAutocomplete, StyledAutocomplete } from './StyledAutocomplete'

export const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
  const { suggestions, onChange, placeholder, ...otherProps } = props

  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const e = {
      target: {
        value: userInput
      }
    }
    onChange(e)
  }, [userInput, onChange])

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase()
    const array = []
    if (value) {
      for (const option of suggestions) {
        if (option.toLowerCase().startsWith(value)) {
          array.push(option)
        }
      }
    }
    setFilteredSuggestions(array)
    setShowSuggestions(true)
    setActiveSuggestion(0)
    setUserInput(e.target.value)
  }

  const onKeyDown = (e) => {
    const enterkey = 13
    const upKey = 38
    const downKey = 40

    if (e.keyCode === enterkey) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setUserInput(filteredSuggestions[activeSuggestion])
    }

    if (e.keyCode === upKey) {
      if (activeSuggestion === 0) {
        return
      }
      setActiveSuggestion(activeSuggestion - 1)
    }

    if (e.keyCode === downKey) {
      if (
        activeSuggestion - 1 === filteredSuggestions.length ||
        activeSuggestion + 1 >= filteredSuggestions.length
      ) {
        return
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  }

  const handleClick = (element) => {
    setUserInput(element)
    setActiveSuggestion(0)
    setShowSuggestions(false)
  }

  return (
    <StyledAutocomplete>
      <TextInput
        {...otherProps}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />

      {showSuggestions &&
        filteredSuggestions.map((element, index) => (
          <OptionAutocomplete
            select={index === activeSuggestion}
            key={index}
            onClick={() => handleClick(element)}
            {...otherProps}
          >
            {element}
          </OptionAutocomplete>
        ))}
    </StyledAutocomplete>
  )
})

Autocomplete.propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array
}

Autocomplete.defaultProps = {
  onChange: () => {},
  variant: 'primary',
  size: 'medium',
  placeholder: '',
  suggestions: []
}

Autocomplete.displayName = 'Autocomplete'
