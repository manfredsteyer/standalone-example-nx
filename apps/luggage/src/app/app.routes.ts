import { Routes } from "@angular/router";
import { CheckinComponent } from "@nx-example/luggage/feature-checkin";
import { ReportLossComponent } from "@nx-example/luggage/feature-report-loss";

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'checkin'
    },
    {
        path: 'checkin',
        component: CheckinComponent
    },
    {
        path: 'report-loss',
        component: ReportLossComponent
    }
];