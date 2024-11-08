import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  AbstractSecurityStorage,
  authInterceptor,
  LogLevel,
  provideAuth,
} from 'angular-auth-oidc-client';
import { environment } from '../environments/environment';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { SsrStorageService } from './auth/ssr-storage.service';
import { provideNgxStripe } from 'ngx-stripe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor()])),
    provideAuth({
      config: {

        scope: 'openid profile email offline',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Warn,
        secureRoutes: [environment.apiUrl,'http://localhost:8080'],
        customParamsAuthRequest: {
        },
      },
    }),
    { provide: AbstractSecurityStorage, useClass: SsrStorageService },
    provideQueryClient(new QueryClient()),
    provideNgxStripe(environment.stripePublishableKey),
  ],
};
