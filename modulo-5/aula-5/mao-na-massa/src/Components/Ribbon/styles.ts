import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors.pokemonType[color]};
    &::before {
      border-left-color: ${darken(0.2, theme.colors.pokemonType[color])};
      border-top-color: ${darken(0.2, theme.colors.pokemonType[color])};
    }
  `,

  right: () => css`
    right: -1.5rem;
    &::before {
      border-right-width: 1.5rem;
      border-left-width: 0rem;
      border-right-color: transparent;
      right: 0;
    }
  `,

  left: () => css`
    left: -1.5rem;
    &::before {
      border-left-width: 1.5rem;
      border-right-width: 0rem;
      border-left-color: transparent;
      left: 0;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, position }) => css`
    align-items: center;
    color: ${theme.colors.white};
    display: flex;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    height: ${theme.spacings.small};
    padding: 0 ${theme.spacings.xsmall};
    position: absolute;
    top: ${theme.spacings.xsmall};
    &::before {
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-top-width: 0.7rem;
      border-style: solid;
      border-left-width: 1.5rem;
      border-right-width: 0rem;
      border-left-color: transparent;
      content: '';
      left: 0;
      position: absolute;
      top: ${theme.spacings.small};
    }
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!position && wrapperModifiers[position]()};
  `}
`