import { Component, Input } from '@angular/core';
import { Character } from '../models/character.model';
import { CommonModule } from '@angular/common';
import { faSearch, faPerson, faHandSpock, faShieldHeart, faHeartCrack, faMars, faVenus, faGenderless, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'lib-character-card',
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  imports: [CommonModule, FontAwesomeModule]
})
export class CharacterCardComponent {
  @Input() character?: Character;
  @Input() loading?: boolean;
  faSearch = faSearch;
  faPerson = faPerson;
  faHandSpock = faHandSpock;
  faShieldHeart = faShieldHeart;
  faHeartCrack = faHeartCrack;
  faMars = faMars;
  faVenus = faVenus;
  faGenderless = faGenderless;
  faQuestion = faQuestion;

  formatCharacterText(): string {
    if (!this.character) {
      return '';
    }

    return `Meet ${this.character.name}, a ${this.character.species} from ${this.character.origin?.name} who has been on countless adventures throughout the multiverse?. This ${this.character.gender} character has been featured in ${this.character.episode?.length} episodes and is currently residing in the ${this.character.location?.name}. With a status of ${this.character.status}, ${this.character.name} is always ready for the next challenge that comes their way.`;
  }
}
