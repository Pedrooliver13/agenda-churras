// Packages
import { ReactElement } from 'react';
import {
  Users as UsersIcon,
  CurrencyCircleDollar as CurrencyCircleDollarIcon,
} from 'phosphor-react';

// Reducers
import { InvitedPerson } from 'reducers/barbecues/reducer';

// Utils
import { formatCurrency, getDateFormated } from 'utils';

// Styles
import * as Styled from './styles';

interface CardProps {
  id: string;
  description: string;
  date: string;
  inviteds: Array<InvitedPerson>;
}

export const Card = ({
  id,
  date,
  description,
  inviteds = [],
}: CardProps): ReactElement => {
  const { day, month } = getDateFormated(date);
  const totalMoney = inviteds.reduce((acc, invited) => {
    return acc + Number(invited.value);
  }, 0);

  return (
    <Styled.CardContainer href={`/barbecue/${id}`}>
      <div className="date">
        {day}/{month}
      </div>
      <div className="description">{description}</div>
      <div className="infos">
        <div className="totalPersons">
          <UsersIcon size={28} weight="fill" />
          {inviteds?.length}
        </div>
        <div className="totalPrice">
          <CurrencyCircleDollarIcon size={28} weight="fill" />
          {formatCurrency(totalMoney)}
        </div>
      </div>
    </Styled.CardContainer>
  );
};
