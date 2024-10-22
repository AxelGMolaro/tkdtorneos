import { Component, Inject, OnInit } from '@angular/core';
import { EPointsType } from '../../../enums/pointTypes.enum';
import { PointsService } from '../../../services/points.service';



@Component({
  selector: 'app-figth',
  standalone: true,
  imports: [],
  templateUrl: './figth.component.html',
  styleUrl: './figth.component.css'
})
export class FigthComponent implements OnInit {

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
  ){

  }
  ngOnInit(): void {
      this.suscribePoints();
  }

  suscribePoints(){
    this.pointsService.points$.subscribe(
      data => {
        console.log(data)
        this.bluePoints = data.bluePoints,
        this.redPoints = data.redPoints
      }
    )
  }

  sumPoints(points: number, type : string){
      this.pointsService.sumPoints(points,type as EPointsType)
  }

  updatePointsCounter(){
    this.pointsCounter.points =  this.bluePoints > this.redPoints ? this.bluePoints : this.redPoints
    this.pointsCounter.color =  this.bluePoints > this.redPoints ? "blue" : "red"
  }

  handleClickFinish(){
    this.showResult = true;
  }
}
