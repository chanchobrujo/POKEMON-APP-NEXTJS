import {FC} from 'react';
import {Card, Grid} from '@nextui-org/react';

interface Properties {
  src?: string;
  name: string;
}

export const ImageSprite: FC<Properties> = ({name, src}) => {
  return (
    <Grid xs={6} sm={6} md={3} xl={3}>
      {src != '' && src != undefined ? (
        <Card isHoverable isPressable>
          <Card.Image src={src} alt={name} width={120} />
        </Card>
      ) : (
        <></>
      )}
    </Grid>
  );
};
