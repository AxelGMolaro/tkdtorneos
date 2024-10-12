
import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export const login = createAction('[User] Login',props<{ user: IUser }>());
export const logOut = createAction('[User] LogOut');