// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { ShowBarbecue } from 'templates';

const ShowBarbecueById = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Criar um novo churrasco</title>
      </Head>

      <ShowBarbecue />
    </>
  );
};

export default ShowBarbecueById;
