import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeFacade } from '@nx-example/booking/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'booking-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent implements OnInit {
  flightClassList$ = this.upgradeFacade.flightClassList$;

  constructor(private upgradeFacade: UpgradeFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.upgradeFacade.load();
  }
}
