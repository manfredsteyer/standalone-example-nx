import { Component } from "@angular/core";
import { RouterLinkWithHref, RouterModule, RouterOutlet } from "@angular/router";

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
