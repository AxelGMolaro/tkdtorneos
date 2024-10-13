import { Component, Inject, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountryService } from '../../services/country.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { TapService } from '../../services/tap.service';

@Component({
  selector: 'app-select-country',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-country.component.html',
  styleUrl: './select-country.component.css'
})
export class SelectCountryComponent implements OnInit{

  countries: ICountry[] = [];

  selectedCountry: string = "Argentina";
  constructor(
    @Inject(CountryService) private countryService: CountryService,
    @Inject(TapService) private tapService: TapService,
  ){}

  async ngOnInit() {
      await this.countryService.initCountries();
      this.countryService.getCountries().subscribe(
        data => {
          this.countries = data
          console.log(data)
        },
      )
      this.initActiveCountry();
  }

  initActiveCountry(){
    // this.countryService.firstInitCountries();
    this.countryService.getActiveCountry().subscribe(country => {
      this.selectedCountry = country? country?.name : "Argentina";
    })
  }
  handleSelect(){
    const country: ICountry  = this.countries.find(data => data.name === this.selectedCountry)!;
    this.countryService.setActiveCountry(country);
  }
}
