import styled from 'styled-components'
import { fontSizes, borderSizes, boxSizes, fonts } from '../common'
import { neon } from '../../themes'

export const StyledSelect = styled.select`
  ${fonts}
  border: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].on}`};
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  font-family: ${({ theme }) => theme.fontFamily.name};
  font-size: ${({ size }) => fontSizes[size]};
  height: ${({ size }) => boxSizes[size]};
  background: transparent;
  outline: none;
  border-radius: 5px;
  padding: 0 20px;
  transition: 500ms;
  &:hover {
    box-shadow: ${({ theme, variant }) =>
      `0px 0px 31px 0px ${theme.bordercolor[variant].blur}`};
    text-shadow: ${({ theme, variant }) =>
      `0px 0px 2px ${theme.textcolor[variant].blur}`};
  }
  & option {
    background-color: #282c34;
  }
`

StyledSelect.defaultProps = {
  theme: neon
}
