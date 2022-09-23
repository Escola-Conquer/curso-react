import styled, { css, DefaultTheme } from 'styled-components'
import { PokemonTypesProps } from '.'

export type TypeColorProps = {
  typeColor: PokemonTypesProps
}

export const wrapperModifiers = {
  type: (theme: DefaultTheme, typeColor: PokemonTypesProps) => css`
    border-color: ${theme.colors.pokemonType[typeColor]};
    color: ${theme.colors.pokemonType[typeColor]};
    &:hover {
      box-shadow: 0 0 16px ${theme.colors.pokemonType[typeColor]};
      color: ${theme.colors.pokemonType[typeColor]};
    }
  `
}

export const Wrapper = styled.div<TypeColorProps>`
  ${({ theme, typeColor }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.large};
    border: ${theme.spacings.xxsmall} dashed;
    cursor: pointer;
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall};
    position: relative;
    text-align: center;
    transition: margin 0.2s ease-in-out, padding 0.2s ease-in-out, background 0.2s ease-in-out, border 0.2s ease-in-out;
    width: auto;
    ${!!typeColor && wrapperModifiers.type(theme, typeColor)}
  `}
`
export const CardName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    text-transform: capitalize;
    padding-left: ${theme.spacings.small};
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`