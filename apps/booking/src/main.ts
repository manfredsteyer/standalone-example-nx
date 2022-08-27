import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouterModule, withDebugTracing, withPreloading } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './app/+state';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { FlightService } from '@nx-example/booking/domain';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
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