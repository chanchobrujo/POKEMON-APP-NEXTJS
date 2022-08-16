import {FC} from 'react';
import {useRouter} from 'next/router';
import {Card, Grid, Row, Text} from '@nextui-org/react';

import {PokemonShortResponse} from 'models/Response';

interface Properties {
  pokemon: PokemonShortResponse;
}

export const PokemonCard: FC<Properties> = ({pokemon}: Properties) => {
  const router = useRouter();

  const pokemonOnClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={12} sm={4} md={3} xl={3}>
      <Card isHoverable isPressable onClick={() => pokemonOnClick()}>
        <Card.Image src={pokemon.url} width={200} height={200} />
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize' h3>
              {pokemon.name}
            </Text>
            <Text h4> #{pokemon.id} </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
