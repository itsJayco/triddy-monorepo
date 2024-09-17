import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, CharactersComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
