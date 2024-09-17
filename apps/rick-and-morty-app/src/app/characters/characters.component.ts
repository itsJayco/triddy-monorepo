import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;
  totalPages: number = 1;
  loading: boolean = false;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.loading = true;
    this.rickAndMortyService.getCharacters(page).subscribe({
      next: (data) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching characters', err);
        this.loading = false;
      }
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
}
