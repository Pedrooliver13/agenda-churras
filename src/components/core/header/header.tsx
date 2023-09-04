// Packages
import { ReactElement } from 'react';
import Link from 'next/link';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <Link href="/">
        <h1>Agenda de Churras</h1>
      </Link>
    </Styled.HeaderContainer>
  );
};
