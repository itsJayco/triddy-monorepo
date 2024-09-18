import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BaseHrefService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setBaseHref(): void {
    console.log('BaseHrefService: setBaseHref called');
    const baseElement = this.document.querySelector('base');
    if (baseElement) {
      const baseHref = this.calculateBaseHref();
      baseElement.setAttribute('href', baseHref);
      console.log('Base href set to:', baseHref);
    }
  }

  calculateBaseHref(): string {
    const currentOrigin = window.location.origin;
    const expectedOrigin = 'https://itsjayco.github.io';

    if (currentOrigin === expectedOrigin) {
      return '/triddy-monorepo/';
    }

    return '/';
  }
}
