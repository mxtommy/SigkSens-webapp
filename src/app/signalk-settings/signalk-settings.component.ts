import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SensorApiService, ISensorInfo } from '../sensor-api.service';



@Component({
  selector: 'app-signalk-settings',
  templateUrl: './signalk-settings.component.html',
  styleUrls: ['./signalk-settings.component.css']
})
export class SignalkSettingsComponent implements OnInit {

  sensorInfoSub: Subscription;
  sensorInfo: ISensorInfo;

  constructor(private SensorApiService: SensorApiService) { }

  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(i => this.sensorInfo = i);
  }


  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }
}
