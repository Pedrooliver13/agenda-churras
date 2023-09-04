// Packages
import Link from 'next/link';
import { ReactElement, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  Users as UsersIcon,
  Trash as TrashIcon,
  Info as InfoIcon,
  ArrowLeft as ArrowLeftIcon,
  CurrencyCircleDollar as CurrencyCircleDollarIcon,
} from 'phosphor-react';

// Components
import { DefaultLayout } from 'components/layout';
import { InviteForm } from './components/inviteForm';

// Contexts
import { useBarbecueContext } from 'contexts/useBarbecueContext';

// Styles
import * as Styled from './styles';

// Utils
import { formatCurrency, getDateFormated } from 'utils';

export const ShowBarbecue = (): ReactElement => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { barbecues, removeBarbecueById, removeInvitedById } =
    useBarbecueContext();

  const currentBarbecue = barbecues.find((barbecue) => barbecue.id === id);
  const { day, month } = getDateFormated(currentBarbecue?.date);

  const totalRaised = currentBarbecue?.inviteds.reduce((acc, invited) => {
    return acc + Number(invited.value);
  }, 0);

  const handleRemoveBarbecueById = (id: string): void => {
    removeBarbecueById(id);
  };

  const handleRemoveInvitedById = (
    barbecueId: string,
    invitedId: string
  ): void => {
    removeInvitedById(barbecueId, invitedId);
  };

  useEffect(() => {
    if (!currentBarbecue) {
      router.push('/');
    }
  }, [router, currentBarbecue]);

  return (
    <DefaultLayout>
      <Styled.ShowBarbecueContainer className="container">
        <Styled.InviteHeader>
          <div className="header">
            <Link href="/">
              <ArrowLeftIcon size={32} />
            </Link>

            <button
              className="remove"
              onClick={() => handleRemoveBarbecueById(id)}
            >
              <TrashIcon size={32} />
            </button>
          </div>

          <div className="infos">
            <div className="date">{day && month && `${day}/${month}`}</div>
            <div className="description">{currentBarbecue?.description}</div>
          </div>

          <div className="value">
            <div className="totalPersons">
              <UsersIcon size={28} weight="fill" />
              {currentBarbecue?.inviteds.length}
            </div>
            <div className="totalPrice">
              <CurrencyCircleDollarIcon size={28} weight="fill" />
              {totalRaised && formatCurrency(totalRaised)}
            </div>
          </div>
        </Styled.InviteHeader>

        {currentBarbecue?.observation && (
          <Styled.InviteObservation>
            <InfoIcon size={20} weight="fill" />
            <p>Observação: {currentBarbecue?.observation}</p>
          </Styled.InviteObservation>
        )}

        <div className="content">
          <InviteForm />

          <Styled.InvitedPersonsList>
            <h1>Convidados: </h1>
            <ul>
              {currentBarbecue?.inviteds?.map((invited) => (
                <li key={invited.id}>
                  {invited.name} - {formatCurrency(invited.value)}
                  <button
                    className="remove"
                    onClick={() => handleRemoveInvitedById(id, invited.id)}
                  >
                    <TrashIcon size={22} />
                  </button>
                </li>
              ))}
            </ul>
          </Styled.InvitedPersonsList>
        </div>
      </Styled.ShowBarbecueContainer>
    </DefaultLayout>
  );
};
