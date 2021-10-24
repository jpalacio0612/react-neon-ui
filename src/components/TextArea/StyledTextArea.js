import styled from 'styled-components'
import { fontSizes, borderSizes, fonts } from '../common'
import { neon } from '../../themes'

export const StyledTextArea = styled.textarea`
  ${fonts}
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  font-family: ${({ theme }) => theme.fontFamily.name};
  text-shadow: ${({ theme, variant }) =>
    `0px 0px 2px ${theme.textcolor[variant].blur}`};
  border: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].on}`};
  background-color: transparent;
  word-spacing: 2px;
  outline: none;
  transition: 500ms;
  &:focus {
    box-shadow: ${({ theme, variant }) =>
      `inset 0 0 10px 1px ${theme.bordercolor[variant].blur}`};
  }
  &:hover {
    box-shadow: ${({ theme, variant }) =>
      `inset 0 0 10px 1px ${theme.bordercolor[variant].blur}`};
  }
  &::placeholder {
    text-shadow: none;
  }
`

StyledTextArea.defaultProps = {
  theme: neon
}
