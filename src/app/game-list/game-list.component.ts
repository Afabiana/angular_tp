import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import {Game} from '../game-list/Game';
import { UserScoresService } from '../user-scores.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {  
  games: Game[] = [];

  constructor( private score_list : UserScoresService,
    private gamesDataService : GameDataService) {}

  ngOnInit(): void {
    //this.games = los datos que me traigo del data service
    this.gamesDataService.getAll()
    .subscribe(games => this.games = games);
  }

  addRateGame(game: Game): void {
      game.ratings_quantity++;
      //agrego juego a la lista de calificaciones del usuario
      this.score_list.addGame(game);
      game.user_score=0;
      //subo los cambios realizados a la api, porque aumente la cantidad de calificaciones
      this.gamesDataService.update(game);
  }
  
}
