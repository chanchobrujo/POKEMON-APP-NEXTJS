import {GetStaticPaths, NextPage, GetStaticPathsContext, GetStaticPropsResult, GetStaticProps, GetStaticPropsContext} from 'next';

import {builderService, pokeService} from 'services';
import {PokemonDataProperties} from 'models/Properties';
import LayoutPokemon from 'components/pokemon/LayoutPokemon';

const PokemonPageByName: NextPage<PokemonDataProperties> = ({data, sprites_male, sprites_female, val_fem, sprites_default}) => {
  return (
    <LayoutPokemon data={data} sprites_male={sprites_male} sprites_female={sprites_female} val_fem={val_fem} sprites_default={sprites_default} />
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx: GetStaticPathsContext) => {
  const pokePath = await pokeService.retrieveNamePokemons(151);
  return {paths: pokePath.map((name) => ({params: {name}})), fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext): Promise<GetStaticPropsResult<PokemonDataProperties>> => {
  const {name} = params as {name: string};
  const props = await builderService.builderPropertiesPokemon(name);
  return {props};
};

export default PokemonPageByName;
