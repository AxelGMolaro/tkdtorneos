import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { count, filter, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { ICountry } from '../interfaces/ICountry';
import { Store } from '@ngrx/store';
import { set, setActiveCountry } from '../ngRx/actions/countries.actions';
import { Firestore } from '@angular/fire/firestore';
import { CountriesState } from '../ngRx/reducers/countries.reducer';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API = "https://restcountries.com/v3.1/all"
  API_COUNTRIES = `${this.API}`

  countries$: Observable<ICountry[]>; 
  activeCountry$: Observable<ICountry|null>; 


  constructor(private http: HttpClient,
    private store: Store<{ countriesState: CountriesState }>,
    private firestore: Firestore,

  ) {
    this.countries$ = this.store.select(state => state.countriesState.countries); 
    this.activeCountry$ = this.store.select(state => state.countriesState.activeCountry); 
   }


   getCountries(): Observable<ICountry[]>{
    return this.store.select(state => state.countriesState).pipe(
      filter(countriesState => !!countriesState), // Asegúrate de que countriesState no sea undefined
      map(countriesState => countriesState.countries) // Accede a countries
    );
   }

   getActiveCountry(): Observable<ICountry|null>{
    return this.store.select(state => state.countriesState.activeCountry); 
   }

   setActiveCountry(country: ICountry){
    this.store.dispatch(setActiveCountry({ country: country })); 

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


  /**
   * Crea una country a partir de un UserCredential
   * @param ICountry 
   */
  async createCountry(country: ICountry){
    const countriesColection = collection(this.firestore, 'countries');
    try {
      // Añadir el nuevo usuario a Firestore
      const docRef = await addDoc(countriesColection, country);
      console.log('Pais creado correctamente con ID:', docRef.id); // ID autogenerado
    } catch (error) {
      console.error('Error al crear el pais: ', error);
    }
  }
  
}
