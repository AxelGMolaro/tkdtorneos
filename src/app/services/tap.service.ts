import { Inject, Injectable } from '@angular/core';
import { CountryService } from './country.service';
import { FieldValue, Firestore} from '@angular/fire/firestore';
import { collection, doc, getDocs, increment, query, updateDoc, where } from 'firebase/firestore';
import { ICountry } from '../interfaces/ICountry';

@Injectable({
  providedIn: 'root'
})
export class TapService {

  constructor(
    @Inject(CountryService) private countryService: CountryService,
    private firestore: Firestore,

  ) { }


  async incrementClickCount(countryName: string) {
    // Hacer la consulta para encontrar el documento basado en el campo 'name'
    const countriesColection = collection(this.firestore,'countries');
    const q = query(countriesColection, where('name', '==', countryName));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
     const country:ICountry = {
      name: countryName,
      tappsCount: 1
     }
     await this.countryService.createCountry(country)
    } else {
      querySnapshot.forEach(async (docSnapshot) => {
        // Referencia al documento específico
        const docRef = doc(this.firestore, `countries/${docSnapshot.id}`);
  
        // Incrementar el campo 'count' de forma atómica
        await updateDoc(docRef, {
          tappsCount: increment(1)  // Incrementa el campo 'count' en 1
        });
        console.log('Campo count incrementado con éxito en el documento:', docSnapshot.id);
      });
    }
  }

}
