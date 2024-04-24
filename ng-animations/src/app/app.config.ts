import { ApplicationConfig, } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    CommonModule,
    provideRouter(routes),
    provideAnimations(),
  ]
};
