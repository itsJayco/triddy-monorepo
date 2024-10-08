import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Character, RickAndMortyService } from '../rick-and-morty.service';
import { CharacterCardComponent } from '@libs/shared-lib';


@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [CommonModule, RouterModule, CharacterCardComponent],
  templateUrl: './characters-details.component.html',
  styleUrl: './characters-details.component.scss',
  providers: [RickAndMortyService],
})
export class CharactersDetailsComponent implements OnInit {
  character!: Character;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickAndMortyService.getCharacterById(+id).subscribe({
        next: (character: Character) => {
          this.character = character;
          this.loading = false;
        },
        error: (error: unknown) => {
          console.error('Error loading character details:', error);
          this.loading = false;
        },
      });
    }
  }
}
