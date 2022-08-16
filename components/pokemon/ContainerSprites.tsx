import {FC} from 'react';
import {Grid} from '@nextui-org/react';

import {ImageSprite} from './ImageSprite';

interface Properties {
  name: string;
  sprites: string[];
}

export const ContainerSprites: FC<Properties> = ({sprites, name}) => {
  return (
    <Grid.Container gap={2} justify='center'>
      {sprites.map((value, i) => (
        <ImageSprite src={value} key={i} name={name} />
      ))}
    </Grid.Container>
  );
};
