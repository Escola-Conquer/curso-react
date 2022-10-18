import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../Services/Pokemon';
import PokemonCard from '../../Components/Card';
import * as S from './styles'

const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([] as { name: string, image: string }[]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPokemons().then((data) => setPokemons(data));
    }, []);

    const nextPage = () => {
        setPage(page + 1);
        getPokemons(page).then((data) => setPokemons([ ...pokemons, ...data ]));
    }

    return (
        <>
            <ul className="pokedex-list">
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokemonCard types={[]} key={index} id={index} {...pokemon} />
                    );
                })}
            </ul>
            <S.NextPage className="pokedex-next-page" onClick={nextPage}>Carregar mais Pokemón</S.NextPage>
        </>
    );
};

export default AllPokemon;