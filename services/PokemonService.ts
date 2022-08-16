import {poke_api} from 'api';
import {builderService} from 'services';
import {PokeApiResponse, PokemonLongResponse, PokemonShortResponse} from 'models/Response';

const retrieveLimitPokemon = async (index: number): Promise<PokeApiResponse> => {
  const {data} = await poke_api.get<PokeApiResponse>(`/pokemon?limit=${index}`);
  return data;
};

const retrieveMiniCarPokemon = async (index: number): Promise<PokemonShortResponse[]> => {
  let pokemons: PokemonShortResponse[] = [];
  return retrieveLimitPokemon(index)
    .then((response) => (pokemons = builderService.builderPokemon(response.results)))
    .catch(() => []);
};

const retrievePokemonByValue = async (value: any): Promise<PokemonLongResponse> => {
  const {data} = await poke_api.get<PokemonLongResponse>(`/pokemon/${value}`);
  return data;
};

const retrieveIdPokemons = (index: number): string[] => {
  return [...Array(index)].map((value, i) => `${i + 1}`);
};

const retrieveNamePokemons = async (index: number): Promise<string[]> => {
  const collection = await retrieveLimitPokemon(index);
  return collection.results.map((pokemon) => pokemon.name);
};

export default {retrieveLimitPokemon, retrieveMiniCarPokemon, retrievePokemonByValue, retrieveIdPokemons, retrieveNamePokemons};
