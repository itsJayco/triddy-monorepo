import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BaseHrefService } from './app/base-href.service';

function initBaseHref(baseHrefService: BaseHrefService) {
  return () => baseHrefService.setBaseHref();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    BaseHrefService,
    {
      provide: 'APP_INITIALIZER',
      useFactory: initBaseHref,
      deps: [BaseHrefService],
      multi: true
    },
  ]
});
