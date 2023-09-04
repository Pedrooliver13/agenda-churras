// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { NewBarbecueForm } from 'templates/newBarbecueForm';

const NewBarbecue = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Churras da trinca - Criar novo churrasco.</title>
      </Head>

      <NewBarbecueForm />
    </>
  );
};

export default NewBarbecue;
