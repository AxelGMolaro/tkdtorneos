import { createReducer, on } from '@ngrx/store';
import { login, logOut } from '../actions/user.actions';
import { IUser } from '../../interfaces/IUser';

// El estado puede ser un usuario (IUser) o null
export const initialState: IUser | any = null;

export const userReducer = createReducer(
  initialState,

  // Cuando el usuario hace login, actualiza el estado con los datos del usuario
  on(login, (state, { user }) => ({ ...user })),

  // Cuando el usuario hace logout, el estado vuelve a null
  on(logOut, () => null)
);
