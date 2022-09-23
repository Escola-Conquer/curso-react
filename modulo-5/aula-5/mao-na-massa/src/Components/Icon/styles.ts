import styled, { css } from 'styled-components'
import { PokemonTypesProps } from '../Card';
import { PokemonTypeIconProps } from '.'

type WrapperProps = {
  typeIcon: PokemonTypesProps
} & Pick<PokemonTypeIconProps, 'hasHover'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, typeIcon, hasHover }) => css`
    align-items: center;
    background-color: ${theme.colors.pokemonType[typeIcon]};
    border-radius: 100%;
    box-shadow: 0 0 2rem ${theme.colors.pokemonType[typeIcon]};
    display: flex;
    height: 3rem;
    justify-content: center;
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    transition: all 0.2s;
    width: ${theme.spacings.medium};
  `}
`