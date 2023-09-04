// Packages
import { ReactElement } from 'react';

// Components
import { DefaultLayout } from 'components/layout';
import { Card, CardButton } from 'components/core';

// Styles
import * as Styled from './styles';

// Contexts
import { useBarbecueContext } from 'contexts/useBarbecueContext';

export const Home = (): ReactElement => {
  const { barbecues } = useBarbecueContext();

  return (
    <DefaultLayout>
      <Styled.SectionCardContainer className="container">
        {barbecues.map((barbecue) => (
          <Card key={barbecue.id} {...barbecue} />
        ))}
        <CardButton href="/barbecue/new" />
      </Styled.SectionCardContainer>
    </DefaultLayout>
  );
};
