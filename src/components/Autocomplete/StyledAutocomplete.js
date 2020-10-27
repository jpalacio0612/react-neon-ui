import styled, { css } from 'styled-components'
import { fontSizes, fonts } from '../common'
import { neon } from '../../themes'

const SelectCss = css`
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  text-shadow: ${({ theme, variant }) =>
    `0px 0px 8px ${theme.textcolor[variant].blur}`};
  box-shadow: ${({ theme, variant }) =>
    `0px 0px 31px 0px ${theme.bordercolor[variant].blur}`};
`

export const OptionAutocomplete = styled.div`
  ${fonts}
  font-family: ${({ theme }) => theme.fontFamily.name};
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ theme, variant }) => theme.textcolor[variant].off};
  border: none;
  word-spacing: 2px;
  background-color: transparent;
  transition: 500ms;
  cursor: pointer;
  ${({ select }) => (select ? SelectCss : null)}
  &:hover {
    color: ${({ theme, variant }) => theme.textcolor[variant].on};
    text-shadow: ${({ theme, variant }) =>
      `0px 0px 8px ${theme.textcolor[variant].blur}`};
    box-shadow: ${({ theme, variant }) =>
      `0px 0px 31px 0px ${theme.bordercolor[variant].blur}`};
  }
`

export const StyledAutocomplete = styled.div`
  ${fonts}
  width: 200px;
  display: flex;
  flex-direction: column;
`

OptionAutocomplete.defaultProps = {
  theme: neon
}

StyledAutocomplete.defaultProps = {
  theme: neon
}
