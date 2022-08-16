import {GetStaticPropsResult, GetStaticPaths, NextPage, GetStaticProps, GetStaticPropsContext} from 'next';

import {builderService, pokeService} from 'services';
import {PokemonDataProperties} from 'models/Properties';
import LayoutPokemon from 'components/pokemon/LayoutPokemon';

const PokemonPage: NextPage<PokemonDataProperties> = ({data, sprites_male, sprites_female, val_fem, sprites_default}) => {
  return (
    <LayoutPokemon data={data} sprites_male={sprites_male} sprites_female={sprites_female} val_fem={val_fem} sprites_default={sprites_default} />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokePath = pokeService.retrieveIdPokemons(151);
  return {paths: pokePath.map((id) => ({params: {id}})), fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext): Promise<GetStaticPropsResult<PokemonDataProperties>> => {
  const {id} = params as {id: string};
  const props = await builderService.builderPropertiesPokemon(id);
  return {props};
};

export default PokemonPage;
