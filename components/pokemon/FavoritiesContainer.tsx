import {FC} from 'react';
import {Grid} from '@nextui-org/react';
import {FavorityCard} from './FavorityCard';

interface Properties {
  favorities: number[];
}

export const FavoritiesContainer: FC<Properties> = ({favorities}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorities.map((id, i) => (
        <FavorityCard key={i} id={id} />
      ))}
    </Grid.Container>
  );
};
