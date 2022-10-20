import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinFacade } from '@nx-example/luggage/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  ticketList$ = this.checkinFacade.ticketList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
