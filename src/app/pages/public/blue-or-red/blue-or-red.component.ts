import { Component, Inject } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomActionDialogComponent } from '../../../components/custom-action-dialog/custom-action-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-blue-or-red',
  standalone: true,
  imports: [FontAwesomeModule,CustomActionDialogComponent,MatDialogModule],
  templateUrl: './blue-or-red.component.html',
  styleUrl: './blue-or-red.component.css'
})
export class BlueOrRedComponent {


  showResult = false;
  isInvert = false;
  faFlag = faFlag;
  showRedFlag = false;
  showBlueFlag = false;


  constructor(
    @Inject(MatDialog) private dialog: MatDialog,
  ){}


  reset(){
    this.showBlueFlag = false;
    this.showRedFlag = false;
  }

  handleClickReset(){
    this.dialog.open(CustomActionDialogComponent, {
      data: {
        title: 'REINICIAR',
        message: `¿Quiere reiniciar el marcador?`,
        action: () => this.reset()
      }
    })
  }
}
