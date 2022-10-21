import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as FlightClassActions from './flight-class.actions';
import { FlightClass } from '../../entities/flight-class';

export const FLIGHTCLASS_FEATURE_KEY = 'booking-flightClass';

export interface State extends EntityState<FlightClass> {
  selectedId?: string | number; // which FlightClass record has been selected
  loaded: boolean; // has the FlightClass list been loaded
  error?: string | null; // last known error (if any)
}

export interface FlightClassPartialState {
  readonly [FLIGHTCLASS_FEATURE_KEY]: State;
}

export const flightClassAdapter: EntityAdapter<FlightClass> =
  createEntityAdapter<FlightClass>();

export const initialState: State = flightClassAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const flightClassReducer = createReducer(
  initialState,
  on(FlightClassActions.loadFlightClass, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FlightClassActions.loadFlightClassSuccess, (state, { flightClass }) =>
    flightClassAdapter.upsertMany(flightClass, { ...state, loaded: true })
  ),
  on(FlightClassActions.loadFlightClassFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return flightClassReducer(state, action);
}
