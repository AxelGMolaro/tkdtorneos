import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setBluePoints, setRedPoints, sumBluePoints, sumRedPoints } from '../ngRx/actions/points.actions';
import { PointsState } from '../ngRx/reducers/points.reducer';
import { EPointsType } from '../enums/pointTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  points$:  Observable<PointsState>;

  constructor(
    private store: Store<{ pointsState: PointsState }>,

  ) {
    this.points$ = this.store.select(state => state.pointsState); 
   }

   resetPoints(){
    this.store.dispatch(setBluePoints({points: 0}))
    this.store.dispatch(setRedPoints({points: 0}))
   }

   sumPoints(points: number, type: EPointsType){
    const reducer = type === EPointsType.BLUE ?  sumBluePoints(({points: points})) : sumRedPoints(({points: points}))
    this.store.dispatch(reducer);
   }
}
