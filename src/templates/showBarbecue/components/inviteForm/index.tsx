// Packages
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

// Components
import { Button, Input } from 'components/core';

// Contexts
import { useBarbecueContext } from 'contexts/useBarbecueContext';

// Reducers
import { Barbecue } from 'reducers/barbecues/reducer';

// Styles
import * as Styled from './styles';

const addNewInvitedValidationSchema = (data?: Barbecue) =>
  zod
    .object({
      name: zod
        .string()
        .trim()
        .min(1, 'Favor preencher o campo descrição.')
        .max(15, 'Ultrapassou o máximo de 15 caracteres!'),
      value: zod.number({
        invalid_type_error: 'Favor adicionar um valor válido.',
      }),
    })
    .superRefine((arg, ctx) => {
      if (arg.value < Number(data?.minValue)) {
        ctx.addIssue({
          message: `Valor mínimo é ${data?.minValue}.`,
          code: 'custom',
          path: ['value'],
        });
      }

      if (arg.value > Number(data?.maxValue)) {
        ctx.addIssue({
          message: `Valor máximo é ${data?.maxValue}.`,
          code: 'custom',
          path: ['value'],
        });
      }
    });

type FormValues = {
  name: string;
  value: number;
};

export const InviteForm = (): ReactElement => {
  const router = useRouter();
  const id = router.query.id as string;
  const { addNewInvited, barbecues } = useBarbecueContext();

  const currentBarbecue = barbecues.find((barbecue) => barbecue.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(addNewInvitedValidationSchema(currentBarbecue)),
  });

  const handleAddNewInvited = (data: FormValues) => {
    addNewInvited(id, data);
    reset();
  };

  return (
    <Styled.InviteFormContainer onSubmit={handleSubmit(handleAddNewInvited)}>
      <Input
        id="invitedName"
        label="Nome do convidado:"
        placeholder="ex: Marquinhos"
        error={errors?.name?.message}
        required
        {...register('name')}
      />
      <Input
        id="invitedValue"
        label="Valor (R$):"
        type="number"
        placeholder="ex: 20,00"
        error={errors?.value?.message}
        required
        step="any"
        {...register('value', {
          valueAsNumber: true,
        })}
      />
      <Button>Adicionar</Button>
    </Styled.InviteFormContainer>
  );
};
