const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (page?: number) => {
    const limit = 20;
    const offset = page ? page * limit : 0;
    const paginatedURL = `${URL}?limit=${limit}&offset=${offset}`;
    // geralmente passamos para o aluno a utilização do axios
    // aqui vale talvez mostrar que nativamente existe a opção também do fetch
    const pokeName = await fetch(paginatedURL).then((response) => response.json());
    const pokeArray: { name: string, image: string }[] = [];

    for (let i = 0; i < pokeName?.results.length; i++) {
      const poke = pokeName?.results[i];
      const pokeInfo = await fetch(poke.url).then((response) => response.json());
      
      const pokeObj: { name: string, image: string, types: Array<String> } = {
        name: poke.name,
        image: pokeInfo?.sprites.front_default,
        types: pokeInfo?.types.map((slot: { type: { name: string; } }) => {
            return slot?.type?.name
          })
      }

      pokeArray.push(pokeObj);
    }

  return pokeArray;
};