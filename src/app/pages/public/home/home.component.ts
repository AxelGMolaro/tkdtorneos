import { Component, Inject, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { MapComponent } from '../../../components/map/map.component';
import { TableOFPositionsComponent } from '../../../components/table-ofpositions/table-ofpositions.component';
import { NgOptimizedImage } from '@angular/common';
import { SelectCountryComponent } from '../../../components/select-country/select-country.component';
import { CountryService } from '../../../services/country.service';
import { ICountry } from '../../../interfaces/ICountry';
import { TapperComponent } from '../../../components/tapper/tapper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, TableOFPositionsComponent,NgOptimizedImage,MapComponent, SelectCountryComponent,
    TapperComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  

}
