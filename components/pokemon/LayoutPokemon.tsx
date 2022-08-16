import confetti from 'canvas-confetti';
import {FC, useEffect, useState} from 'react';
import {Button, Card, Grid, Text} from '@nextui-org/react';

import {Layout} from 'components/layouts';
import {ContainerSprites} from 'components/pokemon';
import {PokemonDataProperties} from 'models/Properties';
import {localFavorities} from 'services';

const LayoutPokemon: FC<PokemonDataProperties> = (properties) => {
  const {data, sprites_male, sprites_female, val_fem, sprites_default} = properties;
  const [isFav, setIsFav] = useState<boolean>(false);

  useEffect(() => {
    setIsFav(localFavorities.exitsInFavorities(data.id));
  }, []);

  const onToggleFavorite = () => {
    localFavorities.toggleFavorities(data.id);
    setIsFav(!isFav);

    if (!isFav) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0.5,
        },
      });
    }
  };

  return (
    <Layout title={data.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={5}>
          <Card isHoverable css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image src={sprites_default} alt={data.name} width='100%' height={400} />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={7}>
          <Card>
            <Grid.Container gap={2} justify='center'>
              <Grid xs={12} sm={6} md={6} xl={6}>
                <Text h1 transform='capitalize'>
                  {data.name}
                </Text>
              </Grid>
              <Grid xs={12} sm={6} md={6} xl={6}>
                <Button size='lg' color='gradient' shadow ghost={!isFav} css={{marginTop: 15}} onClick={onToggleFavorite}>
                  <Text h5> {!isFav ? 'Guardar en favoritos' : 'En favoritos'}</Text>
                </Button>
              </Grid>
            </Grid.Container>
            <Card.Body>
              {val_fem ? <></> : <Text h3>Macho</Text>}
              <ContainerSprites sprites={sprites_male} name={data.name} />
              <br />

              {val_fem ? (
                <></>
              ) : (
                <>
                  <Text h3>Hembra</Text>
                  <ContainerSprites sprites={sprites_female} name={data.name} />
                </>
              )}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default LayoutPokemon;
