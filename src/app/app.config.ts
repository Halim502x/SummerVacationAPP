import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter,
  PreloadAllModules,
  withDebugTracing,
  withPreloading,
  withViewTransitions
 } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules), withDebugTracing(),withViewTransitions()), 
    provideClientHydration(),
    importProvidersFrom(HttpClientModule)
  ]
};
