import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent, SidebarComponent } from '@nx-example/shared/ui-shell';
import { reducer } from './+state';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(APP_ROUTES),
        
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,

        LayoutModule,
        BrowserAnimationsModule,

        StoreModule.forRoot(reducer),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument(),

        RouterModule,
    ],
    declarations: [
        NavbarComponent, 
        SidebarComponent,
        AppComponent,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
