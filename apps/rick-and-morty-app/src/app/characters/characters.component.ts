import { Component, OnInit } from '@angular/core';
import { RickAndMortyService, Character } from '../rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  page: number = 1;
  totalPages: number = 1;
  loading: boolean = false;
  searchTerm: string = '';
  favorites: Set<number> = new Set<number>();
  favoriteCount: number = 0;
  faSearch = faSearch;
  faSolidHeart = faSolidHeart;
  faRegularHeart = faRegularHeart;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.loadFavorites();
  }

  loadCharacters(page: number = 1, searchTerm: string = ''): void {
    this.loading = true;
    if (searchTerm.trim() !== '') {
      // Fetch filtered characters by name and page
      this.rickAndMortyService
        .getCharactersByNameAndPage(searchTerm, page)
        .subscribe({
          next: (data) => {
            this.characters = data.results;
            this.totalPages = data.info.pages;
            this.filteredCharacters = this.characters;
            this.loading = false;
          },
          error: (err) => {
            console.error('Error fetching characters', err);
            this.filteredCharacters = [];
            this.loading = false;
          },
        });
    } else {
      // Fetch characters for a specific page (no filtering)
      this.rickAndMortyService.getCharacters(page).subscribe({
        next: (data) => {
          this.characters = data.results;
          this.totalPages = data.info.pages;
          this.filteredCharacters = this.characters;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching characters', err);
          this.filteredCharacters = [];
          this.loading = false;
        },
      });
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadCharacters(this.page, this.searchTerm);
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters(this.page, this.searchTerm);
    }
  }

  filterCharacters(): void {
    if (this.searchTerm.trim() === '') {
      this.page = 1;
      this.loadCharacters(this.page);
    } else {
      this.page = 1;
      this.loadCharacters(this.page, this.searchTerm);
    }
  }

  toggleFavorite(event: Event, character: Character): void {
    event.stopPropagation();
    if (this.favorites.has(character.id)) {
      this.favorites.delete(character.id);
    } else {
      this.favorites.add(character.id);
    }
    this.updateFavoriteCount();
    this.saveFavorites();
  }

  updateFavoriteCount(): void {
    this.favoriteCount = this.favorites.size;
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
      this.updateFavoriteCount(); // Update the favorite count when loading from localStorage
    }
  }
}
