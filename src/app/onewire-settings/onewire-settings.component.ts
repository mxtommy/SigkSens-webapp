import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo, ISensorObject } from '../sensor-api.service';


@Component({
  selector: 'app-onewire-settings',
  templateUrl: './onewire-settings.component.html',
  styleUrls: ['./onewire-settings.component.css']
})
export class OnewireSettingsComponent implements OnInit, OnDestroy {

  sensorInfoSub: Subscription;
  timer: FormControl = new FormControl('', Validators.required);

  sensors: ISensorObject[] = [];
  

  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        

        if (sensorInfo.timers['oneWire']) {
          this.timer.setValue(sensorInfo.timers['oneWire']);
        }

        this.sensors = sensorInfo["sensors"].filter(function (sensor) { return sensor.type == "oneWire" });
        
        
      });
      

  }

  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }

  saveTimer() {
    this.SensorApiService.setNewTimerValue('oneWire', this.timer.value);
    this.timer.markAsPristine();
  }

}
