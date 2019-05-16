export enum UserActionTypes {
  SET_CURRENT_USER = '[users][SET_CURRENT_USER]'
}

// export class UserActions {
//   currentUser: Observable<User>;
//   constructor() {
//     UserActions.currentUser = this.store.select(state => state.users.currentUser);
//   }
// }

export interface SetCurrentUserAction{
  user: User;
}