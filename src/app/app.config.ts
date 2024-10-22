import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStore } from '@ngrx/store';
import { userReducer } from './ngRx/reducers/user.reducer';
import { provideHttpClient } from '@angular/common/http';
import { countriesReducer } from './ngRx/reducers/countries.reducer';
import { pointsReducer } from './ngRx/reducers/points.reducer.';

export const appConfig: ApplicationConfig = {
  providers:
   [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()), 
    provideHttpClient(),
    provideStore({
      user:userReducer,
      countriesState: countriesReducer,
      pointsState: pointsReducer
    })],
    
    
};
