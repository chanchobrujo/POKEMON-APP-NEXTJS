import {NextPage} from 'next';
import {Container, Text} from '@nextui-org/react';

const NoFavorities: NextPage = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh-100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text h1>No hay favoritos :(</Text>
    </Container>
  );
};

export default NoFavorities;
