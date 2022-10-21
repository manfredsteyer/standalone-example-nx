import { Routes } from "@angular/router";
import { provideBookingDomain } from "@nx-example/booking/domain";
import { UpgradeComponent } from "./upgrade.component";

export const UPGRADE_ROUTES: Routes = [
    {
        path: '',
        component: UpgradeComponent,
        pathMatch: 'full',
        providers: [
            provideBookingDomain()
        ]
    }
];