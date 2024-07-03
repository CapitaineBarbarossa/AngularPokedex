import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-favorite',
  standalone: true,
    imports: [
    CommonModule,
  ],
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit {
  favoritePokemon: string[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoritePokemon = this.favoriteService.getFavoritePokemon();
  }

  removeFromFavorites(pokemonName: string): void {
    this.favoriteService.removeFromFavorites(pokemonName);
    this.favoritePokemon = this.favoriteService.getFavoritePokemon();
  }
}
