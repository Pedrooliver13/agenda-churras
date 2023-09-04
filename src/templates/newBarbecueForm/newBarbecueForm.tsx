// Packages
import { ReactElement, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

// Components
import { Button, Input } from 'components/core';
import { DefaultLayout } from 'components/layout';

// Contexts
import { useBarbecueContext } from 'contexts/useBarbecueContext';

// Styles
import * as Styled from './styles';

const newBarbecueValidationSchema = zod
  .object({
    description: zod
      .string()
      .trim()
      .min(1, 'Favor preencher o campo descrição.')
      .max(30, 'Descrição ultrapassou o máximo de 30 caracteres.'),
    date: zod
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data enviada no formato errado.')
      .refine(
        (dateValue) => new Date(dateValue) > new Date(),
        'Data não pode ser no passado.'
      ),
    minValue: zod.coerce
      .number({
        invalid_type_error: 'Favor adicionar um valor válido.',
      })
      .min(1, 'Favor adicionar um valor.'),
    maxValue: zod.number({
      invalid_type_error: 'Favor adicionar um valor válido.',
    }),
    observation: zod.string(),
  })
  .superRefine((values, ctx) => {
    if (values.minValue > values.maxValue) {
      ctx.addIssue({
        message: 'Valor mínimo, não pode ser maior que máximo.',
        code: 'custom',
        path: ['minValue'],
      });
    }
  });

type FormValues = zod.infer<typeof newBarbecueValidationSchema>;

export const NewBarbecueForm = (): ReactElement => {
  const { createNewBarbecue } = useBarbecueContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(newBarbecueValidationSchema),
  });

  const handleCreateNewBarbecue = (data: FormValues): void => {
    createNewBarbecue(data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast('Formulário incorreto!', {
        type: 'error',
        theme: 'dark',
      });
    }
  }, [errors]);

  return (
    <DefaultLayout>
      <Styled.newBarbecueContainer className="container">
        <form onSubmit={handleSubmit(handleCreateNewBarbecue)}>
          <Input
            id="description"
            label="Descrição:"
            placeholder="ex: Aniversário do Pedro"
            error={errors?.description?.message}
            required
            {...register('description')}
          />
          <Input
            id="date"
            label="Data:"
            type="date"
            error={errors?.date?.message}
            required
            {...register('date')}
          />
          <Input
            id="minValue"
            label="Valor mínimo:"
            type="number"
            placeholder="ex: 20,00 (SEM refrigerante)"
            error={errors?.minValue?.message}
            required
            step="any"
            {...register('minValue', {
              valueAsNumber: true,
            })}
          />
          <Input
            id="maxValue"
            label="Valor máximo:"
            type="number"
            placeholder="ex: 50,00 (COM refrigerante)"
            error={errors?.maxValue?.message}
            required
            step="any"
            {...register('maxValue', {
              valueAsNumber: true,
            })}
          />
          <Input
            id="observation"
            label="Observações adicionais:"
            placeholder="ex: Pagar no pix"
            {...register('observation')}
          />
          <Button>Adicionar</Button>
        </form>
      </Styled.newBarbecueContainer>
    </DefaultLayout>
  );
};
