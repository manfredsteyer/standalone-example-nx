import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FlightClassActions from './flight-class.actions';
import { FlightClassDataService } from '../../infrastructure/flight-class.data.service';

@Injectable()
export class FlightClassEffects {
  loadFlightClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlightClassActions.loadFlightClass),
      switchMap((action) =>
        this.flightClassDataService.load().pipe(
          map((flightClass) =>
            FlightClassActions.loadFlightClassSuccess({ flightClass })
          ),
          catchError((error) =>
            of(FlightClassActions.loadFlightClassFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flightClassDataService: FlightClassDataService
  ) {}
}
