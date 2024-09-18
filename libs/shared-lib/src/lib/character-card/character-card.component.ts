import { Component, Input } from '@angular/core';
import { Character } from '../models/character.model';

@Component({
  selector: 'lib-character-card',
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character?: Character;
  @Input() loading?: boolean;
}