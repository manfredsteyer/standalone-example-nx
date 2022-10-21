// libs/booking/domain/src/lib/domain.providers.ts

import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { BookingEffects } from './+state/effects';
import { bookingFeature } from './+state/reducers';
import { FlightClassEffects } from './+state/flight-class/flight-class.effects';
import {
  FLIGHTCLASS_FEATURE_KEY,
  reducer,
} from './+state/flight-class/flight-class.reducer';

export function provideBookingDomain() {
  return [
    provideState(bookingFeature),
    provideEffects([BookingEffects]),

    provideState(FLIGHTCLASS_FEATURE_KEY, reducer),
    provideEffects([FlightClassEffects]),
  ];
}
