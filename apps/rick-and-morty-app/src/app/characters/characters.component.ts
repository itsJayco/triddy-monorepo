import { Component, OnInit } from '@angular/core';
import { Character, RickAndMortyService } from '../rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  page: number = 1;
  totalPages: number = 1;
  loading: boolean = false;
  searchTerm: string = '';
  favorites: Set<number> = new Set<number>();

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.loadFavorites();
  }

  loadCharacters(page: number = 1): void {
    this.loading = true;
    this.rickAndMortyService.getCharacters(page).subscribe({
      next: (data) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.filteredCharacters = this.characters;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching characters', err);
        this.loading = false;
      },
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadCharacters(this.page);
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters(this.page);
    }
  }

  filterCharacters(): void {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleFavorite(character: Character): void {
    if (this.favorites.has(character.id)) {
      this.favorites.delete(character.id);
    } else {
      this.favorites.add(character.id);
    }
    this.saveFavorites();
  }

  isFavorite(character: Character): boolean {
    return this.favorites.has(character.id);
  }

  saveFavorites(): void {
    localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(this.favorites))
    );
  }

  loadFavorites(): void {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = new Set<number>(JSON.parse(favorites));
    }
  }
}
