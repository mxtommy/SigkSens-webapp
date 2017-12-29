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
          MatButtonToggleModule,
          MatRadioModule,
          MatListModule,
          MatDialogModule,
           } from '@angular/material';

import { AppComponent } from './app.component';
//import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { SensorConfigAttrComponent } from './sensor-config-attr/sensor-config-attr.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorApiService } from './sensor-api.service';
import { ModalChangeHostnameComponent } from './modal-change-hostname/modal-change-hostname.component';
import { SignalkSettingsComponent } from './signalk-settings/signalk-settings.component';
import { DigitalInSettingsComponent } from './digital-in-settings/digital-in-settings.component';
import { Sht30SettingsComponent } from './sht30-settings/sht30-settings.component';
import { OnewireSettingsComponent } from './onewire-settings/onewire-settings.component';
import { MpuSettingsComponent } from './mpu-settings/mpu-settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sigk', component: SignalkSettingsComponent },
  { path: 'digital', component: DigitalInSettingsComponent },
  { path: 'sht30', component: Sht30SettingsComponent },
  { path: 'onewire', component: OnewireSettingsComponent },
  { path: 'mpu', component: MpuSettingsComponent },
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
    SensorConfigAttrComponent,
    DashboardComponent,
    ModalChangeHostnameComponent,
    SignalkSettingsComponent,
    DigitalInSettingsComponent,
    Sht30SettingsComponent,
    OnewireSettingsComponent,
    MpuSettingsComponent,
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
    MatButtonToggleModule,
    MatRadioModule,
    MatListModule,
    MatDialogModule,

    RouterModule.forRoot(routes, { useHash: true }),
  ],
  entryComponents: [ ModalChangeHostnameComponent ],
  providers: [ SensorApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
