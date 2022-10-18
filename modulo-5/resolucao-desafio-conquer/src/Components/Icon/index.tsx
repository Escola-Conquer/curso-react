import { PokemonTypesProps } from '../Card';
import * as Style from './styles'

export type PokemonTypeIconProps = {
  type: PokemonTypesProps
  hasHover?: boolean
}

const PokemonTypeIcon = ({ type, hasHover = false }: PokemonTypeIconProps) => (
  <Style.Wrapper typeIcon={type} hasHover={hasHover}>
    <img
      src={`/images/type-icons/${type}.png`}
      alt={type}
      width={18}
      height={18}
    />
  </Style.Wrapper>
)

export default PokemonTypeIcon