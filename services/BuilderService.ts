import {pokeService} from 'services';
import {PokemonDataProperties} from 'models/Properties';
import {PokemonShortResponse, PokemonLongResponse, Sprites, PokemonRequiredPropsResponse} from 'models/Response';

const imageMiniCard = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

const builderPokemon = (array: PokemonShortResponse[]): PokemonShortResponse[] => {
  return array?.map((pokemon, i) => ({...pokemon, id: i + 1, url: imageMiniCard(i + 1)}));
};

const builderPropertiesPokemon = async (value: any): Promise<PokemonDataProperties> => {
  const response: PokemonLongResponse = await pokeService.retrievePokemonByValue(value);

  const sp: Sprites = response.sprites;
  const data: PokemonRequiredPropsResponse = {id: response.id, name: response.name};

  const sprites_default = response.sprites.other['official-artwork'].front_default;
  const sprites_male = [sp.front_default, sp.back_default, sp.front_shiny, sp.back_shiny];
  const sprites_female = [sp.front_female || '', sp.back_female || '', sp.front_shiny_female || '', sp.back_shiny_female || ''];
  const val_fem = sprites_female.filter((value) => value == '').length != 0;

  return {data, sprites_male, sprites_female, val_fem, sprites_default};
};

export default {imageMiniCard, builderPokemon, builderPropertiesPokemon};
