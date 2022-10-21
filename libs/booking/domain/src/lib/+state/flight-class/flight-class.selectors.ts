import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FLIGHTCLASS_FEATURE_KEY,
  State,
  FlightClassPartialState,
  flightClassAdapter,
} from './flight-class.reducer';

// Lookup the 'FlightClass' feature state managed by NgRx
export const getFlightClassState = createFeatureSelector<
  FlightClassPartialState,
  State
>(FLIGHTCLASS_FEATURE_KEY);

const { selectAll, selectEntities } = flightClassAdapter.getSelectors();

export const getFlightClassLoaded = createSelector(
  getFlightClassState,
  (state: State) => state.loaded
);

export const getFlightClassError = createSelector(
  getFlightClassState,
  (state: State) => state.error
);

export const getAllFlightClass = createSelector(
  getFlightClassState,
  (state: State) => selectAll(state)
);

export const getFlightClassEntities = createSelector(
  getFlightClassState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFlightClassState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFlightClassEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
