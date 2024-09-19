import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BaseHrefService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setBaseHref(): void {
    const baseElement = this.document.querySelector('base');
    if (baseElement) {
      const baseHref = this.calculateBaseHref();
      baseElement.setAttribute('href', baseHref);
      console.log('Base href set to:', baseHref); // For debugging
    }
  }

  calculateBaseHref(): string {
    const currentOrigin = window.location.origin;
    const isLocalhost =
      currentOrigin.includes('localhost') ||
      currentOrigin.includes('127.0.0.1');

    if (isLocalhost) {
      return '/';
    }

    const expectedOrigin = 'https://itsjayco.github.io';
    if (currentOrigin === expectedOrigin) {
      return '/triddy-monorepo/';
    }

    return '/';
  }
}
