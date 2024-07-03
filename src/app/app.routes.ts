import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'favorites', component: PokemonFavoriteComponent },
];
