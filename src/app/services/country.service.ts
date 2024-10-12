import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API = "https://restcountries.com/v3.1/"
  API_COUNTRIES = `${this.API}lang/spanish`

  db:any;

  constructor(private http: HttpClient) {

      const firebaseApp = initializeApp(environment.firebaseConfig);
      this.db = getFirestore(firebaseApp);

   }

  async getAllCountries(): Promise<any> {
    try {
      const docRef = await addDoc(collection(this.db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    
      return this.http.get<any>(this.API_COUNTRIES);

    } catch (e) {
      console.error("Error adding document: ", e);
    }

    
  }
}
