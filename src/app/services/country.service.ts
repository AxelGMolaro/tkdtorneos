import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { ICountry } from '../interfaces/ICountry';
import { Store } from '@ngrx/store';
import { set } from '../ngRx/actions/countries.actions';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API = "https://restcountries.com/v3.1/all"
  API_COUNTRIES = `${this.API}`

  countries$: Observable<ICountry[]>; 


  constructor(private http: HttpClient,
    private store: Store<{ countries: ICountry[] }>

  ) {
    this.countries$ = this.store.select('countries'); 
   }


   getCoutries(): Observable<ICountry[]>{
    return this.store.select('countries'); 
   }

   async initCountries() {
    try {
      let countries = await this.http.get<any>(this.API_COUNTRIES).toPromise();
      let countryNames = countries.map((country: any) => country.translations.spa.common).filter(Boolean); // Ajusta 'country.name' según la estructura de tu respuesta
      countryNames = Array.from(new Set(countryNames));
      this.store.dispatch(set({ countries: countryNames })); 
    } catch (e) {
      console.error('Error al obtener los países', e);
      throw e; // Opcional: lanzar el error para que lo maneje quien llama al método
    }
  }
}
