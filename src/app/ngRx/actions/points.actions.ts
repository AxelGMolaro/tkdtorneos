
import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export const sumBluePoints = createAction('[User] sum blue points',props<{ points: number }>());
export const sumRedPoints = createAction('[User] sum red points',props<{ points: number }>());
export const setBluePoints = createAction('[User] set blue points',props<{ points: number }>());
export const setRedPoints = createAction('[User] set red points',props<{ points: number }>());