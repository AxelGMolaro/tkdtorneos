import { createReducer, on } from '@ngrx/store';
import { sumBluePoints, sumRedPoints, setBluePoints, setRedPoints } from '../actions/points.actions';


export interface PointsState {
  bluePoints: number;
  redPoints: number;
}

export const initialState: PointsState = {
  bluePoints: 0,
  redPoints: 0
};

export const pointsReducer = createReducer(
  initialState,

  on(sumBluePoints, (state, { points }) => {
    const newPoints = state.bluePoints + points <= 0 ? 0 :  state.bluePoints + points;
    const newState = {
      ...state,
      bluePoints: newPoints
    }
    return newState
  }),

  on(sumRedPoints, (state, { points }) => {
    const newPoints = state.redPoints + points <= 0 ? 0 :  state.redPoints + points;
    const newState = {
      ...state,
      redPoints: newPoints
    }
    return newState
  }),



  on(setBluePoints, (state, { points }) => ({...state,bluePoints: points})),
  on(setRedPoints, (state, { points }) => ({...state,redPoints: points})),

);
