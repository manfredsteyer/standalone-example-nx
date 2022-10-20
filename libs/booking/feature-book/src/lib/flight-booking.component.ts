import { HttpClientModule } from "@angular/common/http";
import { Component, importProvidersFrom } from "@angular/core";
import { RouterLinkWithHref, RouterModule, RouterOutlet } from "@angular/router";

// import { CheckinDomainModule } from '@nx-example/checkin/domain';

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
