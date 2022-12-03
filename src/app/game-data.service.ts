import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from './game-list/Game';

const URL = 'https://6383f70e4ce192ac604d7cdb.mockapi.io/games' ;

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private data: HttpClient) { }

  public getAll(): Observable<Game[]> {
    //el get a data me va a traer todos los juegos de la api
    //en pipe() modifico los valores de user_score 
    //antes de retornar el observable a los componentes(observers)
    return this.data.get<Game[]>(URL).pipe(
                tap((games: Game[]) => games.forEach(game => game.user_score = 0))
              );
  }

  public updatePost(game : Game): void{
    this.data.put(URL + game.id, game);
  }

  public getGameById(id : String): Observable<Game> {
    return this.data.get<Game>(URL+'/'+id).pipe(
      tap((game: Game) => game.user_score = 2)
    );
  }

  public update(game : Game): void{
    this.data.put<Game>(URL+'/'+game.id, game)
    .subscribe();
  }

}
