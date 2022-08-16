import {NextPage} from 'next';
import {useEffect, useState} from 'react';

import {localFavorities} from 'services';
import {Layout} from 'components/layouts';
import NoFavorities from 'components/ui/NoFavorities';
import {FavoritiesContainer} from 'components/pokemon';

const Favorities: NextPage = () => {
  const [favorities, setFavorities] = useState<number[]>([]);

  useEffect(() => {
    setFavorities(localFavorities.getFavorites());
  }, []);

  return (
    <Layout title='My favorities pokemons'>{favorities.length == 0 ? <NoFavorities /> : <FavoritiesContainer favorities={favorities} />}</Layout>
  );
};

export default Favorities;
