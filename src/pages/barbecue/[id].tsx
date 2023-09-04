// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { ShowBarbecue } from 'templates';

const ShowBarbecueById = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Churras da trinca - Visualizar Churrasco.</title>
      </Head>

      <ShowBarbecue />
    </>
  );
};

export default ShowBarbecueById;
