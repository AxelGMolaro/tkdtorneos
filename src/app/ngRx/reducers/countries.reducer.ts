import { createReducer, on } from '@ngrx/store';
import { login,  } from '../actions/user.actions';
import { ICountry } from '../../interfaces/ICountry';
import { set, setActiveCountry } from '../actions/countries.actions';


export interface CountriesState {
  countries: ICountry[];
  activeCountry: ICountry | null;
}

export const initialState: CountriesState = {
  countries: [],
  activeCountry: null
};

export const countriesReducer = createReducer(
  initialState,
  on(set, (state, { countries }) => ({
    ...state,
    countries: [...countries]
  })),
  on(setActiveCountry, (state, { country }) => ({
    ...state,
    activeCountry: country
  }))
);

