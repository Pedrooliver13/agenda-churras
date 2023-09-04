// Packages
import { ReactElement } from 'react';
import Head from 'next/head';

// Templates
import { Home } from 'templates/home';

const App = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Churras da trinca</title>
      </Head>

      <Home />
    </>
  );
};

export default App;
