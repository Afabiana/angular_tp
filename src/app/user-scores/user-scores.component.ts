import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game-list/Game';
import { UserScoresService } from '../user-scores.service';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.scss']
})

export class UserScoresComponent implements OnInit {

  scoresList$: Observable<Game[]>;

  constructor(private score_list : UserScoresService) { 
    this.scoresList$ = score_list.scoresList.asObservable();
  }
 
  ngOnInit(): void {
  }

  setUserScore(game: Game): void {    
    this.score_list.setGameUserScore(game);
    console.log("nuevo puntaje "+game.user_score);
  }

  removeFromList(id: string): void{
    this.score_list.removeFromList(id);
  }

}
