import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';

import { SensorApiService, ISensorInfo } from '../sensor-api.service';


@Component({
  selector: 'path-settings',
  templateUrl: './path-settings.component.html',
  styleUrls: ['./path-settings.component.css']
})
export class PathSettingsComponent implements OnInit {

  sensors = [];
  webSocket;
  
  sensorInfoSub: Subscription;
  sensorInfo: ISensorInfo;

  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        
        this.sensors = sensorInfo["sensors"];
      });
  }

}
