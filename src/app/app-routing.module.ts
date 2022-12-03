import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesAboutComponent } from './games-about/games-about.component';
import { GamesHomeComponent } from './games-home/games-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  { 
    path : 'home',
    component : GamesHomeComponent
  },
  { 
    path: 'about',
    component : GamesAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
