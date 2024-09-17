import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, RickAndMortyService } from '../rick-and-morty.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters-details.component.html',
  styleUrl: './characters-details.component.css',
})
export class CharactersDetailsComponent implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute, 
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickAndMortyService.getCharacterById(+id).subscribe({
        next: (character: Character) => this.character = character,
        error: (error: unknown) => console.error('Error loading character details:', error)
      });
    }
  }
}