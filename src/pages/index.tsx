import type { NextPage } from 'next';
import Head from 'next/head';

import Main from './main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manager Music Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
};

export default Home;

