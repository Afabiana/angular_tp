import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//Date Import
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { GameListComponent } from './game-list/game-list.component';

//Forms module
import { FormsModule } from '@angular/forms';
import { GamesAboutComponent } from './games-about/games-about.component';
import { GamesHomeComponent } from './games-home/games-home.component';
import { UserScoresComponent } from './user-scores/user-scores.component';
import { RatingScaleComponent } from './rating-scale/rating-scale.component';
registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamesAboutComponent,
    GamesHomeComponent,
    UserScoresComponent,
    RatingScaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
