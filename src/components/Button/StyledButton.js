import styled, { css } from 'styled-components'
import { boxSizes, fontSizes, borderSizes, fonts } from '../common'
import { neon } from '../../themes'

const hover = css`
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  border: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].on}`};
  text-shadow: ${({ theme, variant }) =>
    `0px 0px 8px ${theme.textcolor[variant].blur}`};
  box-shadow: ${({ theme, variant }) =>
    `0px 0px 31px 0px ${theme.bordercolor[variant].blur}`};
`

export const StyledButton = styled.button`
  ${fonts}
  color: ${({ theme, variant }) => theme.textcolor[variant].off};
  height: ${({ size }) => boxSizes[size]};
  font-size: ${({ size }) => fontSizes[size]};
  font-family: ${({ theme }) => theme.fontFamily.name};
  border: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].off}`};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 10px;
  padding: 0 20px;
  transition: 500ms;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:hover {
    ${({ isDisabled }) => !isDisabled && hover}
  }
`

StyledButton.defaultProps = {
  theme: neon
}
