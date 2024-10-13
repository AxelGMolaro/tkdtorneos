import { Component, Inject, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ICountry } from '../../interfaces/ICountry';

@Component({
  selector: 'app-table-ofpositions',
  standalone: true,
  imports: [],
  templateUrl: './table-ofpositions.component.html',
  styleUrl: './table-ofpositions.component.css'
})
export class TableOFPositionsComponent implements OnInit {

  countries: ICountry[] = [];
  constructor(
    @Inject(CountryService) private countryService:CountryService
  ){

  }

  ngOnInit(): void {
        this.initCountries();
  }

  initCountries(){
    this.countryService.getCountries().subscribe(countries => {
      const array:ICountry[] = countries.slice().sort(
        (a: ICountry, b: ICountry) => {
          return (b.tappsCount || 0) - (a.tappsCount || 0);
        }
      );
      this.countries = array;
    })
  }
}
