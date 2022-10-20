import { Routes } from "@angular/router";
import { BookingEffects, FlightService, provideBookingDomain } from "@nx-example/booking/domain";
import { FlightBookingComponent } from "./flight-booking.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from "@angular/common/http";
import { bookingInterceptor } from "./utils/booking.interceptor";

export const FLIGHT_BOOKING_ROUTES: Routes = [{
    path: '',
    component: FlightBookingComponent,
    providers: [
        // FlightService,
        // BookingEffects,
        // provideHttpClient(
        //     withRequestsMadeViaParent(),
        //     withInterceptors([bookingInterceptor])
        // ),
        provideBookingDomain()
    ],
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'flight-search'
        },
        {
            path: 'flight-search',
            component: FlightSearchComponent
        },
        {
            path: 'passenger-search',
            component: PassengerSearchComponent
        },
        {
            path: 'flight-edit/:id',
            component: FlightEditComponent
        }
    ]
}];







// {
//     provide: INJECTOR_INITIALIZER,
//     multi: true,
//     useValue: () => inject(InitService).init()
// }
