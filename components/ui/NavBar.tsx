import {FC} from 'react';
import {Spacer, Text, useTheme} from '@nextui-org/react';

import {LinkPage} from './LinkPage';

export const NavBar: FC = () => {
  const {theme} = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray200.value,
      }}>
      <LinkPage route='/'>
        <Text color='white' h2>
          P
        </Text>
        <Text color='white' h3>
          okémon
        </Text>
      </LinkPage>

      <Spacer css={{flex: 1}} />
      <LinkPage route='/favorites'>
        <Text css={{margin: 20}} color='white'>
          Favoritos
        </Text>
      </LinkPage>
    </div>
  );
};
