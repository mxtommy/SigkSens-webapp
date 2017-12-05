import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { RouterModule, Routes } from '@angular/router';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatInputModule, 
          MatFormFieldModule,
          MatToolbarModule,
          MatExpansionModule,
          MatAutocompleteModule,
          MatSidenavModule,
          MatCardModule,
          MatButtonModule,
          MatListModule,
          MatDialogModule,
           } from '@angular/material';

import { AppComponent } from './app.component';
//import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorConfigAttrComponent } from './sensor-config-attr/sensor-config-attr.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorApiService } from './sensor-api.service';
import { ModalChangeHostnameComponent } from './modal-change-hostname/modal-change-hostname.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  ];




@NgModule({
  declarations: [
    AppComponent,
    //SensorConfigComponent,
    SensorListComponent,
    SensorConfigAttrComponent,
    DashboardComponent,
    ModalChangeHostnameComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,  
    MatListModule,
    MatDialogModule,

    RouterModule.forRoot(routes, { useHash: true }),
  ],
  entryComponents: [ ModalChangeHostnameComponent ],
  providers: [ SensorApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
