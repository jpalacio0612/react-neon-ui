import styled from 'styled-components'
import { fontSizes, borderSizes, fonts, boxSizes } from '../common'
import { neon } from '../../themes'

export const ButtonSelect = styled.button`
  ${fonts}
  border: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].on}`};
  font-family: ${({ theme }) => theme.fontFamily.name};
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  height: ${({ size }) => boxSizes[size]};
  word-spacing: 2px;
  min-width: 160px;
  background-color: transparent;
  transition: 500ms;
  &:hover {
    text-shadow: ${({ theme, variant }) =>
      `0px 0px 8px ${theme.textcolor[variant].blur}`};
    box-shadow: ${({ theme, variant }) =>
      `0px 0px 31px 0px ${theme.bordercolor[variant].blur}`};
  }
`

export const ContentSelect = styled.div`
  border-top: none;
  display: none;
`

export const StyledSelect = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${ContentSelect} {
    display: flex;
    flex-direction: column;
  }
`

StyledSelect.defaultProps = {
  theme: neon
}

ButtonSelect.defaultProps = {
  theme: neon
}

ContentSelect.defaultProps = {
  theme: neon
}
