import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportLossFacade } from '@nx-example/luggage/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'luggage-report-loss',
  templateUrl: './report-loss.component.html',
  styleUrls: ['./report-loss.component.scss'],
})
export class ReportLossComponent implements OnInit {
  lossReportList$ = this.reportLossFacade.lossReportList$;

  constructor(private reportLossFacade: ReportLossFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.reportLossFacade.load();
  }
}
