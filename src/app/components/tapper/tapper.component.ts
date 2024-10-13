import { Component, Inject, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { TapService } from '../../services/tap.service';
import { count } from 'firebase/firestore';

@Component({
  selector: 'app-tapper',
  standalone: true,
  imports: [],
  templateUrl: './tapper.component.html',
  styleUrl: './tapper.component.css'
})
export class TapperComponent implements OnInit {


  activeCountry: string = "Argentina";

  constructor(
    @Inject(TapService) private tapService: TapService,
    @Inject(CountryService) private countryService: CountryService,
  ){

  }

  ngOnInit(): void {
      this.countryService.getActiveCountry().subscribe(
        country => {
          this.activeCountry = country?.name ? country.name : this.activeCountry ;
        }
      )
  }



  handleTap(){
    this.tapService.incrementClickCount(this.activeCountry)
  }
}
