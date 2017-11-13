import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatInputModule, 
          MatFormFieldModule,
          MatToolbarModule,
          //MatExpansionModule,
          MatAutocompleteModule,
          MatSidenavModule,
          MatCardModule,
          MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorConfigComponent,
    SensorListComponent
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
    //MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
