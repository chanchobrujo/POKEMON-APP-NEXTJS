import {FC} from 'react';
import Head from 'next/head';
import {NavBar} from 'components/ui';

interface Properties {
  title: string;
  children: React.ReactNode;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Properties> = ({children, title}) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name='author' content='Kevin Palma' />
        <meta name='description' content={'Información sobre ' + title} />
        <meta name='keywords' content={title + ', pokemon'} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={'Esta es la pagina sobre ' + title} />
        <meta property='og:image' content={`${origin}/images/banner.jpg`} />
      </Head>

      <NavBar />
      <main style={{padding: '0px 20px'}}>{children}</main>
    </>
  );
};
