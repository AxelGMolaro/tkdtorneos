
import { createAction, props } from '@ngrx/store';
import { ICountry } from '../../interfaces/ICountry';

export const set = createAction(
    '[Country] Set Countries',
    props<{ countries: ICountry[] }>() // Asegúrate de que sea un array de ICountry
  );

export const setActiveCountry = createAction(
    '[Country] Set Active Country',
    props<{ country: ICountry }>() 
  );