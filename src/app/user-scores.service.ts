import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class UserScoresService {

  private _scoresList: Game[] = [];
  scoresList : BehaviorSubject<Game[]> = new BehaviorSubject(this._scoresList);

  constructor() { }

  addGame(game: Game) {
    let item = this._scoresList.find((v1) => v1.id == game.id);
    if(!item){
      this._scoresList.push({... game});
    }
    this.scoresList.next(this._scoresList);
  }

  removeFromList(id : string): void{
    let copia = [];
    for(let i = 0; i<this._scoresList.length;i++){
      if(this._scoresList[i].id != id){
        copia.push(this._scoresList[i]);
      }
    }
    this._scoresList=copia;
    this.scoresList.next(this._scoresList);
  }

  setGameUserScore(game: Game): void{
    let item = this._scoresList.find((v1) => v1.id == game.id);
    
    if(item!=undefined){
      item.user_score = game.user_score;
    }
  }
  
}