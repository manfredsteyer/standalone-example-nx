import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckinComponent } from '@nx-example/luggage/feature-checkin';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CheckinComponent
  ],
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luggage';
}
