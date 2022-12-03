import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.scss']
})
export class RatingScaleComponent implements OnInit {

  @Input() score: number;
  @Input() id: string; //id nomas lo uso en el template
  @Output() scoreChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {
  }
  
  ratingGame(event: any) : void{
    this.score=event.target.value;
    this.scoreChange.emit(this.score); /*emite todas las modif q le hice a this.score*/
  }
  
}
