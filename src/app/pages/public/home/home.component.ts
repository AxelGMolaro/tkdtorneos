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
  imports: [LayoutComponent, TableOFPositionsComponent,NgOptimizedImage,MapComponent, SelectCountryComponent,TapperComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
 
  private audio = new Audio();


  constructor(){
  }

  ngOnInit(): void {
    this.setAudio();

  }


  setAudio(){
    this.audio.src = "https://firebasestorage.googleapis.com/v0/b/globalclick-app.appspot.com/o/app%2Fmusica.mp3?alt=media&token=875ffb51-ce90-455b-9f66-2fdde959061b"
    this.audio.load();
  }

  playSound(){
    this.audio.play().catch(error => console.log('Error al reproducir sonido:', error));
  }
  

}
