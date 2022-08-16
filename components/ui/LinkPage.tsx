import {FC} from 'react';
import NextLink from 'next/link';
import {Link} from '@nextui-org/react';

interface Properties {
  route: string;
  children: React.ReactNode;
}

export const LinkPage: FC<Properties> = ({children, route}) => {
  return (
    <NextLink href={route} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};
