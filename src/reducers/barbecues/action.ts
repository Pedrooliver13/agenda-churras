// Reducers
import { Barbercue, InvitedPerson } from 'reducers/barbecues/reducer';

export enum ActionTypes {
  CREATE_NEW_BARBECUE = 'CREATE_NEW_BARBECUE',
  REMOVE_BARBECUE_BY_ID = 'REMOVE_BARBECUE_BY_ID',
  ADD_NEW_INVITED = 'ADD_NEW_INVITED',
  REMOVE_INVITED_BY_ID = 'REMOVE_INVITED_BY_ID',
}

export interface ActionResponse<T> {
  type: string;
  payload: {
    [name: string]: T;
  };
}

interface AddNewInvitedActionParams {
  barbecueId: string;
  newInvited: InvitedPerson;
}

type AddNewInvitedActionResponse = AddNewInvitedActionParams;

interface RemoveInvitedActionParams {
  barbecueId: string;
  invitedId: string;
}

type RemoveInvitedActionResponse = RemoveInvitedActionParams;

export const createnNewBarbecueAction = (
  newBarbecue: Barbercue
): ActionResponse<Barbercue> => {
  return {
    type: ActionTypes.CREATE_NEW_BARBECUE,
    payload: {
      newBarbecue,
    },
  };
};

export const removeBarbecueByIdAction = (
  barbecueId: string
): ActionResponse<string> => {
  return {
    type: ActionTypes.REMOVE_BARBECUE_BY_ID,
    payload: {
      barbecueId,
    },
  };
};

export const addNewInvitedAction = (
  data: AddNewInvitedActionParams
): ActionResponse<AddNewInvitedActionResponse> => {
  return {
    type: ActionTypes.ADD_NEW_INVITED,
    payload: {
      data,
    },
  };
};

export const removeInvitedByIdAction = (
  data: RemoveInvitedActionParams
): ActionResponse<RemoveInvitedActionResponse> => {
  return {
    type: ActionTypes.REMOVE_INVITED_BY_ID,
    payload: {
      data,
    },
  };
};
