import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
           } from '@angular/material';

import { AppComponent } from './app.component';
//import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorConfigAttrComponent } from './sensor-config-attr/sensor-config-attr.component';

@NgModule({
  declarations: [
    AppComponent,
    //SensorConfigComponent,
    SensorListComponent,
    SensorConfigAttrComponent
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
    MatButtonModule,  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
