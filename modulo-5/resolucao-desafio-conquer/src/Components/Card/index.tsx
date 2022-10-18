
import Ribbon, { RibbonPosition } from '../Ribbon'

import TypeIcon from '../Icon';
import Image from '../Image';

import * as Style from './styles'


export type PokemonTypesProps =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'ground'
  | 'flying'
  | 'ghost'
  | 'rock'
  | 'fighting'
  | 'poison'
  | 'psychic'
  | 'bug'
  | 'dark'
  | 'steel'
  | 'dragon'
  | 'fairy';

  export type PokemonCardProps = {
    id: number
    key: number
    name: string
    image: string
    types: PokemonTypesProps[]
    ribbonPosition?: RibbonPosition
}

const PokemonCard = ({ id, key, name, image, types, ribbonPosition }: PokemonCardProps) => {
    return (
        <Style.Wrapper typeColor={types[0]}>
            <Ribbon position={ribbonPosition} color={types[0]}>
                #{id + 1}
            </Ribbon>
            <Style.CardName>{name}</Style.CardName>

            <>
                <Image
                    srcImg={image}
                    alt={name}
                    width={100}
                    height={100}
                    role="img"
                />
            </>

            <Style.WrapperIcons>
            {types.map((type, index) => (
                <TypeIcon hasHover key={index} type={type} />
            ))}
            </Style.WrapperIcons>
        </Style.Wrapper>
    );
};

export default PokemonCard;

