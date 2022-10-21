import { createAction, props } from '@ngrx/store';
import { FlightClass } from '../../entities/flight-class';

export const loadFlightClass = createAction('[FlightClass] Load FlightClass');

export const loadFlightClassSuccess = createAction(
  '[FlightClass] Load FlightClass Success',
  props<{ flightClass: FlightClass[] }>()
);

export const loadFlightClassFailure = createAction(
  '[FlightClass] Load FlightClass Failure',
  props<{ error: any }>()
);
