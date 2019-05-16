import User from "../model/user";
import {UserActionTypes} from "../actions/user.action";
import {PayloadAction} from "../actions";
import { Action } from 'redux';


export type UserState = {
  currentUser: User;
}

const initialState: UserState = {
  currentUser: null
}

export const UserReducer = function (state: UserState = initialState, action: Action): UserState {
  const _action: PayloadAction = action as any;

  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      if (!state.currentUser) {
        return tassign(state, {
          currentUser: tassign((<SetCurrentUserAction>action).user)
        });
      } else {
        return tassign(state, {
          currentUser: (<SetCurrentUserAction>action).user
        });
      }

    default:
      return state;
  }
}