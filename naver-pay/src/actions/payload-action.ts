import { Action } from 'redux';

export class PayloadAction implements Action {
  type: any;
  payload: any;
}
