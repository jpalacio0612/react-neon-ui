import React from 'react'
import PropTypes from 'prop-types'

import { StyledDivider, StyledVerticalDivider } from './StyledDivider'

export const Divider = React.forwardRef(function Divider(props, ref) {
  const { orientation, variant, disabled, thick, ...otherProps } = props

  if (orientation === 'vertical') {
    return (
      <StyledVerticalDivider
        ref={ref}
        disabled={disabled}
        orientation={orientation}
        variant={variant}
        thick={thick}
        {...otherProps}
      />
    )
  }
  return (
    <StyledDivider
      ref={ref}
      disabled={disabled}
      orientation={orientation}
      variant={variant}
      thick={thick}
      {...otherProps}
    />
  )
})

Divider.propTypes = {
  variant: PropTypes.string,
  thick: PropTypes.string,
  disabled: PropTypes.bool,
  orientation: PropTypes.string
}

Divider.defaultProps = {
  variant: 'primary',
  thick: '1',
  orientation: 'horizontal',
  disabled: false
}

Divider.displayName = 'Dividerr'
