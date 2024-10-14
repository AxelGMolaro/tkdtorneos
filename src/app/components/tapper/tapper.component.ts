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
  private audioSrc = "https://firebasestorage.googleapis.com/v0/b/globalclick-app.appspot.com/o/app%2Ftap.mp3?alt=media&token=8f302ce3-0265-46e6-bdb6-cb0b52204bec"; // Ruta al archivo de sonido en tu proyecto";

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
    this.playSound()
  }

  playSound() {
    // Crear una nueva instancia de Audio en cada click
    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.load(); // Carga el archivo de sonido
    audio.play().catch(error => console.log('Error al reproducir sonido:', error));
  }
}
