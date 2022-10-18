import { PokemonTypesProps } from '../Card'
import * as Style from './styles'

export type RibbonColors = PokemonTypesProps
export type RibbonPosition = 'right' | 'left'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  position?: RibbonPosition
}
const Ribbon = ({ children, color, position = 'left' }: RibbonProps) => (
  <Style.Wrapper position={position} color={color}>
    {children}
  </Style.Wrapper>
)

export default Ribbon