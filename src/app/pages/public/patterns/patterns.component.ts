import { Component, Inject } from '@angular/core';
import { PointsService } from '../../../services/points.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CustomActionDialogComponent } from '../../../components/custom-action-dialog/custom-action-dialog.component';
import { EPointsType } from '../../../enums/pointTypes.enum';

@Component({
  selector: 'app-patterns',
  standalone: true,
  imports: [CustomActionDialogComponent, MatDialogModule],
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.css'
})
export class PatternsComponent {

  isInvert = false
  showResult = false;
  bluePoints = 0;
  redPoints = 0;
  pointsCounter = {
    color: "blue",
    points: 0
  }

  constructor(
    @Inject(PointsService) private pointsService: PointsService,
    @Inject(MatDialog) private dialog: MatDialog,

  ){

  }
  ngOnInit(): void {
      this.suscribePoints();
  }

  suscribePoints(){
    this.pointsService.setPoints(10,10)
    this.pointsService.points$.subscribe(
      data => {
        console.log(data)
        this.bluePoints = data.bluePoints,
        this.redPoints = data.redPoints
      }
    )
  }

  sumPoints(points: number, type : string){
    //solo deja sumar hasta 10
    let sum = type as EPointsType == EPointsType.RED && this.redPoints == 10 && points > 0 ? false : EPointsType.BLUE && this.bluePoints == 10 && points > 0 ? false : true
    if(!this.showResult && sum){
      this.pointsService.sumPoints(points,type as EPointsType)
    }
  }

  updatePointsCounter(){
    this.pointsCounter.points =  this.bluePoints > this.redPoints ? this.bluePoints : this.redPoints
    this.pointsCounter.color =  this.bluePoints > this.redPoints ? "blue" : "red"
  }

  handleClickFinish(){
    this.showResult = true;
  }

  resetPoints(){
    this.pointsService.setPoints(10,10)
    this.showResult = false;
  }

  handleClickReset(){
    this.dialog.open(CustomActionDialogComponent, {
      data: {
        title: 'REINICIAR',
        message: `¿Quiere reiniciar el marcador?`,
        action: () => this.resetPoints()
      }
    })
  }

}
