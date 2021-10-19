import styled, { css } from 'styled-components'
// import { borderSizes } from '../common'
import { neon } from '../../themes'

const styledCss = css`
  border-image: initial;
  border-color: ${({ theme, variant, disabled }) =>
    disabled ? theme.textcolor[variant].off : theme.textcolor[variant].on};
  border-style: solid;
  box-shadow: ${({ theme, variant, disabled }) =>
    disabled ? 'unset' : `0px 0px 12px 4px ${theme.bordercolor[variant].blur}`};
`

export const StyledDivider = styled.hr`
  ${styledCss};
  border-width: 0px 0px ${({ thick }) => thick}px 0px;
  width: 100%;
`

export const StyledVerticalDivider = styled.hr`
  ${styledCss};
  border-width: 0px 0px 0px ${({ thick }) => thick}px;
  height: 100%;
  margin: 0 auto;
`

StyledDivider.defaultProps = {
  theme: neon
}

StyledVerticalDivider.defaultProps = {
  theme: neon
}
