import {Grid} from '@nextui-org/react';
import type {GetStaticPropsResult, NextPage} from 'next';

import {pokeService} from 'services';
import {Layout} from 'components/layouts';
import {PokemonCard} from 'components/pokemon';
import {PokemonShortResponse} from 'models/Response';

interface Properties {
  pokemons: PokemonShortResponse[];
}

const Home: NextPage<Properties> = ({pokemons}) => {
  return (
    <Layout title='Pokemon app'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Properties>> => {
  let pokemons: PokemonShortResponse[] = await pokeService.retrieveMiniCarPokemon(151);
  return {props: {pokemons}};
};

export default Home;
