import { Component, Inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { MapComponent } from '../../../components/map/map.component';
import { TableOFPositionsComponent } from '../../../components/table-ofpositions/table-ofpositions.component';
import { NgOptimizedImage } from '@angular/common';
import { SelectCountryComponent } from '../../../components/select-country/select-country.component';
import { CountryService } from '../../../services/country.service';
import { ICountry } from '../../../interfaces/ICountry';
import { TapperComponent } from '../../../components/tapper/tapper.component';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
 


  constructor(
    private router: Router
  ){
  }

  ngOnInit(): void {

  }

  navigateByUrl(url:string){
    this.router.navigateByUrl(url)
  }


  
  

}
