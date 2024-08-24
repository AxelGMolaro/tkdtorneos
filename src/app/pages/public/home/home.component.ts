import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { TableOFPositionsComponent } from '../../../components/table-ofpositions/table-ofpositions.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, TableOFPositionsComponent,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
