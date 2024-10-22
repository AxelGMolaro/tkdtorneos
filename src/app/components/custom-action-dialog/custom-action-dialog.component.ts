import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


interface DialogData{
  title?: string;
  message?: string;
  buttonYes?: string;
  buttonNo?: string;
  action:  () => void;
}


@Component({
  selector: 'app-custom-action-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './custom-action-dialog.component.html',
  styleUrl: './custom-action-dialog.component.css'
})
export class CustomActionDialogComponent {

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){

    data.buttonYes = "SI"
    data.buttonNo = "NO"
  }


  runAction(){
    this.data.action()
  }
}
