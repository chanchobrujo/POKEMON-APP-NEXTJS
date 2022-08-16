import {Card, Grid} from '@nextui-org/react';
import {FC} from 'react';

interface Properties {
  id: number;
}

export const FavorityCard: FC<Properties> = ({id}) => {
  const img: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{padding: 10}}>
        <Card.Image height={140} width={'100%'} src={img} />
      </Card>
    </Grid>
  );
};
