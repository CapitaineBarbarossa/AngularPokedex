import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeService } from '../services/poke.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PokemonType } from '../models/enums/pokemon-type';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MoveDetails } from '../models/move-details';
import { MatInputModule } from '@angular/material/input';
import { PokeHelperService } from '../services/poke-helper.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FavoriteService } from '../services/favorite.service'; 

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})

export class PokemonDetailComponent implements OnInit {

  pokemon!: Pokemon;
  total!: number;
  moves: MoveDetails[];
  displayedColumns = ['name', 'type', 'power', 'accuracy'];
  dataSource = new MatTableDataSource<MoveDetails>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isFavorite = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private pokeService: PokeService, private pokeHelperService: PokeHelperService, private favoriteService: FavoriteService) {
    this.pokemon = data.pokemon;
    this.moves = [];
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.calculateTotalStats();
    this.checkFavoriteStatus();
  }

  getColorForType(type: string): string {
    return PokemonType[type as keyof typeof PokemonType];
  }

  upperFirstLetter(word: string): string {
    return this.pokeHelperService.upperFirstLetter(word);
  }
  
  getTypeDetailImageUrl(type: string): string {
    return this.pokeHelperService.getTypeDetailImageUrl(type);
  }
  
  calculateTotalStats(): void {    
    this.total = 0;
    this.pokemon.stats.forEach(stat => {
      this.total = this.total + stat.base_stat;
    });
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.favoriteService.removeFromFavorites(this.pokemon.id.toString()); // Utilisation de l'id du Pokémon pour la gestion des favoris
    } else {
      this.favoriteService.addToFavorites(this.pokemon.id.toString()); // Utilisation de l'id du Pokémon pour la gestion des favoris
    }
    this.isFavorite = !this.isFavorite;
  }

  checkFavoriteStatus(): void {
    this.isFavorite = this.favoriteService.isFavorite(this.pokemon.id.toString()); // Vérifie si le Pokémon est un favori au chargement
  }
  
}
