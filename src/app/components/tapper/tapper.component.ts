import { Component, Inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { TapService } from '../../services/tap.service';

@Component({
  selector: 'app-tapper',
  templateUrl: './tapper.component.html',
  standalone: true,
  styleUrls: ['./tapper.component.css'] // Usa 'styleUrls' en lugar de 'styleUrl'
})
export class TapperComponent implements OnInit {
  activeCountry: string = "Argentina";
  private audioSrc = "https://firebasestorage.googleapis.com/v0/b/globalclick-app.appspot.com/o/app%2Ftap.mp3?alt=media&token=8f302ce3-0265-46e6-bdb6-cb0b52204bec"; // Ruta al archivo de sonido

  constructor(
    @Inject(TapService) private tapService: TapService,
    @Inject(CountryService) private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.countryService.getActiveCountry().subscribe(country => {
      this.activeCountry = country?.name ? country.name : this.activeCountry;
    });
  }

  handleTap(): void {
    this.tapService.incrementClickCount(this.activeCountry);
    this.playSound();
  }

  playSound(): void {
    const audio = new Audio(this.audioSrc);
    audio.load();
    audio.play().catch(error => console.log('Error al reproducir sonido:', error));
  }
}
