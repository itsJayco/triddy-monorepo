import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RickAndMortyService } from './rick-and-morty.service';
import { ApiResponse, Character } from './rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule, CharactersComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  error: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      (data: ApiResponse) => {
        this.characters = data.results;
      },
      (err: unknown) => {
        this.error = 'Failed to load characters';
        console.error(err);
      }
    );
  }
}
