// Packages
import { ReactElement } from 'react';
import { CalendarPlus as CalendarPlusIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

interface CardButton {
  href: string;
}

export const CardButton = ({ href = '/new' }: CardButton): ReactElement => {
  return (
    <Styled.CardButtonContainer href={href}>
      <div className="icon">
        <CalendarPlusIcon size={44} />
      </div>
      <p>Adicionar um novo Churrasco</p>
    </Styled.CardButtonContainer>
  );
};
