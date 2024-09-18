import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { BaseHrefService } from './base-href.service';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, CharactersComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private baseHrefService: BaseHrefService) {}

  ngOnInit(): void {
    this.baseHrefService.setBaseHref();
  }
}
