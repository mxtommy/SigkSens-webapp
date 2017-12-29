import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';

import { ModalChangeHostnameComponent } from './modal-change-hostname/modal-change-hostname.component';
import { SensorApiService } from './sensor-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  host: Observable<string>;
  status: boolean;

  sensorInfoSub: Subscription;
  
  sht30Present: boolean = false;
  mpuPresent: boolean = false;
  oneWirePresent: boolean = false;


  constructor(public dialog:MatDialog, private SensorApiService: SensorApiService) {}

  ngOnInit() {
    this.host = this.SensorApiService.getHostNameAsO();
    this.SensorApiService.getStatusAsO().subscribe(s => this.status = s);

    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        if (sensorInfo['sensorOneWire']) { this.oneWirePresent = true; }
        if (sensorInfo['sensorSHT30']) { this.sht30Present = true; }
        if (sensorInfo['sensorMPU925X']) { this.mpuPresent = true; }
      });

  }

  changeHostname() {
    let hostname = this.SensorApiService.getHostName();
    let dialogRef = this.dialog.open(ModalChangeHostnameComponent, {
      data: hostname
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.SensorApiService.setHostName(result);
      }        
    });


  }


}


