import { Component } from "@angular/core";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

// import { CheckinDomainModule } from '@nx-example/luggage/domain';

@Component({
  standalone: true,
  selector: 'flight-booking',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
  ],
  templateUrl: './flight-booking.component.html'
})
export class FlightBookingComponent {
}
