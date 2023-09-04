// Packages
import { ReactElement } from 'react';
import Image from 'next/image';

// Styles
import * as Styled from './styles';

export const Footer = (): ReactElement => {
  return (
    <Styled.FooterContainer>
      <Image width={48} height={48} src="/images/logo.svg" alt="Logo marca" />
    </Styled.FooterContainer>
  );
};
