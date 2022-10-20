import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withLegacyInterceptors } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducer } from './app/+state';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { authInterceptor } from './utils/auth.interceptor';
import { LegacyInterceptor } from './utils/legacy.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]),
      withLegacyInterceptors(),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LegacyInterceptor,
      multi: true,
    },
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
    ),
    provideStore(reducer),
    provideEffects([]),
    provideStoreDevtools(),
    provideAnimations(),
    importProvidersFrom(LayoutModule),
  ]
});






// {
//   provide: INJECTOR_INITIALIZER,
//   multi: true,
//   useValue: () => inject(InitService).init()
// }