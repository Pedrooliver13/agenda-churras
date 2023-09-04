// Packages
import { ReactNode, createContext, useContext, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

// Reducers
import { Barbercue, barbecueReducers } from 'reducers/barbecues/reducer';
import {
  createnNewBarbecueAction,
  removeBarbecueByIdAction,
  addNewInvitedAction,
  removeInvitedByIdAction,
} from 'reducers/barbecues/action';

interface CreateBarbecueFormData {
  description: string;
  date: string;
  obsevationw?: string;
  minValue: number;
  maxValue: number;
}

interface AddInvitedPersonFormData {
  name: string;
  value: number;
}

interface BarbecueContextProviderProps {
  children: ReactNode;
}

export type BarbecueContextProps = {
  barbecues: Array<Barbercue>;
  createNewBarbecue: (data: CreateBarbecueFormData) => void;
  removeBarbecueById: (id: string) => void;
  addNewInvited: (barbecueId: string, data: AddInvitedPersonFormData) => void;
  removeInvitedById: (barbecueId: string, invitedId: string) => void;
};

const BarbecueContext = createContext<BarbecueContextProps>({
  barbecues: [],
  createNewBarbecue: () => {},
  removeBarbecueById: () => {},
  addNewInvited: () => {},
  removeInvitedById: () => {},
});

const BarbecueContextProvider = ({
  children,
}: BarbecueContextProviderProps) => {
  const router = useRouter();
  const [barbecusState, dispatch] = useReducer(barbecueReducers, {
    barbecues: [],
  });

  const { barbecues } = barbecusState;

  const createNewBarbecue = (data: CreateBarbecueFormData): void => {
    const id = String(new Date().getTime());

    const newBarbecue: Barbercue = {
      ...data,
      id,
      inviteds: [],
    };

    router.push('/');
    dispatch(createnNewBarbecueAction(newBarbecue));
    toast('Criado com sucesso!', {
      theme: 'dark',
      type: 'success',
    });
  };

  const removeBarbecueById = (id?: string): void => {
    if (!id) {
      return;
    }

    router.push('/');
    dispatch(removeBarbecueByIdAction(id));
    toast('Removido com sucesso!', {
      theme: 'dark',
      type: 'success',
    });
  };

  const addNewInvited = (
    barbecueId: string,
    data: AddInvitedPersonFormData
  ): void => {
    const id = String(new Date().getTime());

    const newInvited = {
      ...data,
      id,
    };

    dispatch(addNewInvitedAction({ barbecueId, newInvited }));
  };

  const removeInvitedById = (barbecueId: string, invitedId: string): void => {
    dispatch(removeInvitedByIdAction({ barbecueId, invitedId }));
  };

  return (
    <BarbecueContext.Provider
      value={{
        barbecues,
        createNewBarbecue,
        removeBarbecueById,
        addNewInvited,
        removeInvitedById,
      }}
    >
      {children}
    </BarbecueContext.Provider>
  );
};

const useBarbecueContext = () => useContext(BarbecueContext);

export { BarbecueContext, BarbecueContextProvider, useBarbecueContext };
