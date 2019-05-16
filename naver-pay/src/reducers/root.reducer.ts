import {UserReducer, UserState} from "./user.reducer";
import { combineReducers, Reducer } from 'redux';

export interface AppState {
  user: UserState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  user: UserReducer
});