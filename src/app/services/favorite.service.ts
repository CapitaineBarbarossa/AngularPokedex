import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly storageKey = 'favoritePokemon';

  constructor() {}

  // Récupérer la liste des Pokémon favoris
  getFavoritePokemon(): string[] {
    const favoritesJSON = localStorage.getItem(this.storageKey);
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  }

  // Ajouter un Pokémon aux favoris
  addToFavorites(pokemonName: string): void {
    let favorites = this.getFavoritePokemon();
    if (!favorites.includes(pokemonName)) {
      favorites.push(pokemonName);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  // Supprimer un Pokémon des favoris
  removeFromFavorites(pokemonName: string): void {
    let favorites = this.getFavoritePokemon();
    favorites = favorites.filter(name => name !== pokemonName);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  // Vérifier si un Pokémon est déjà dans les favoris
  isFavorite(pokemonName: string): boolean {
    const favorites = this.getFavoritePokemon();
    return favorites.includes(pokemonName);
  }
}
