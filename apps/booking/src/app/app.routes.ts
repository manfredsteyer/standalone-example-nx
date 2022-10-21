import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flight-booking',
    loadChildren: () =>
      import('@nx-example/booking/feature-book').then(
        (m) => m.FLIGHT_BOOKING_ROUTES
      ),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('@nx-example/booking/feature-tickets').then(
        (m) => m.TicketsModule
      ),
  },
  {
    path: 'next-flight',
    // component: NextFlightComponent,
    loadComponent: () => 
      import('@nx-example/booking/feature-tickets')
        .then(m => m.NextFlightComponent),
  },
  {
    path: 'luggage',
    loadChildren: () => loadRemoteModule({
      type: 'manifest', // Angular >= 13
      remoteName: 'luggage',
      exposedModule: './routes'
    }).then(esm => esm.APP_ROUTES)
  }
 
];
