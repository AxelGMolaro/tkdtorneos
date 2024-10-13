import { Component, Inject, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [],
  templateUrl: './select-country.component.html',
  styleUrl: './select-country.component.css'
})
export class SelectCountryComponent implements OnInit{

  countries: ICountry[] = [];


  constructor(
    @Inject(CountryService) private countryService: CountryService,
  ){}

  async ngOnInit() {
    await this.countryService.initCountries();
    this.countryService.getCoutries().subscribe(
      data => {
        this.countries = data
        console.log(data)
      },
    )
}
}
