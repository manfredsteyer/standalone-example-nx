// libs/booking/domain/src/lib/domain.providers.ts

import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { BookingEffects } from "./+state/effects";
import { bookingFeature } from "./+state/reducers";

export function provideBookingDomain() {
    return [
        // importProvidersFrom(StoreModule.forFeature(bookingFeature)),
        // importProvidersFrom(EffectsModule.forFeature([BookingEffects])),
        provideState(bookingFeature),
        provideEffects([BookingEffects])
    ];
}
