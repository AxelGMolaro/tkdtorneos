import { createReducer, on } from '@ngrx/store';
import { login,  } from '../actions/user.actions';
import { ICountry } from '../../interfaces/ICountry';
import { set } from '../actions/countries.actions';

// El estado puede ser un usuario (IUser) o null
export const initialState: ICountry[] = []; // Estado inicial como un array vacío

export const countriesReducer = createReducer(
  initialState,
  on(set, (state, { countries }) => [...countries]) // Actualiza el estado con el nuevo array
);