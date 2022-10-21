import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadFlightClass } from '../+state/flight-class/flight-class.actions';
import * as fromFlightClass from '../+state/flight-class/flight-class.reducer';
import * as FlightClassSelectors from '../+state/flight-class/flight-class.selectors';

@Injectable({ providedIn: 'root' })
export class UpgradeFacade {
  loaded$ = this.store.pipe(select(FlightClassSelectors.getFlightClassLoaded));
  flightClassList$ = this.store.pipe(
    select(FlightClassSelectors.getAllFlightClass)
  );
  selectedFlightClass$ = this.store.pipe(
    select(FlightClassSelectors.getSelected)
  );

  constructor(private store: Store<fromFlightClass.FlightClassPartialState>) {}

  load(): void {
    this.store.dispatch(loadFlightClass());
  }
}
