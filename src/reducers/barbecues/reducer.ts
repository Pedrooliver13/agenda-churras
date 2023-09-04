// Packages
import { produce } from 'immer';

// Reducers
import { ActionTypes } from './action';

export interface Barbecue {
  id: string;
  description: string;
  date: string;
  observation?: string;
  inviteds: Array<InvitedPerson>;
  minValue: number;
  maxValue: number;
}

export interface InvitedPerson {
  id: string;
  name: string;
  value: number;
}

interface BarbecueState {
  barbecues: Barbecue[];
}

export const barbecueReducers = (state: BarbecueState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_BARBECUE:
      return produce(state, (draft) => {
        draft.barbecues.push(action.payload.newBarbecue);
      });
    case ActionTypes.REMOVE_BARBECUE_BY_ID:
      const BarbecueFiltered = state.barbecues.filter(
        (barbecue) => barbecue.id !== action.payload.barbecueId
      );

      return produce(state, (draft) => {
        draft.barbecues = BarbecueFiltered;
      });
    case ActionTypes.ADD_NEW_INVITED:
      return produce(state, (draft) => {
        draft.barbecues.map((barbecue) => {
          if (barbecue.id === action.payload.data.barbecueId) {
            barbecue.inviteds.push(action.payload.data.newInvited);
          }

          return barbecue;
        });
      });
    case ActionTypes.REMOVE_INVITED_BY_ID:
      const { barbecueId, invitedId } = action.payload.data;

      return produce(state, (draft) => {
        draft.barbecues.map((barbecue) => {
          if (barbecue.id === barbecueId) {
            barbecue.inviteds = barbecue?.inviteds.filter(
              (invited) => invited.id !== invitedId
            );
          }

          return barbecue;
        });
      });
    default:
      return state;
  }
};
