import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo, ISensorObject } from '../sensor-api.service';


@Component({
  selector: 'app-sht30-settings',
  templateUrl: './sht30-settings.component.html',
  styleUrls: ['./sht30-settings.component.css']
})
export class Sht30SettingsComponent implements OnInit, OnDestroy  {

  sensorInfoSub: Subscription;
  timer: FormControl = new FormControl('', Validators.required);

  sensors: ISensorObject[] = [];
  

  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        

        if (sensorInfo.timers['sht30']) {
          this.timer.setValue(sensorInfo.timers['sht30']);
        }

        this.sensors = sensorInfo["sensors"].filter(function (sensor) { return sensor.type == "sht30" });
        
        
      });
      

  }

  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }

  saveTimer() {
    this.SensorApiService.setNewTimerValue('sht30', this.timer.value);
    this.timer.markAsPristine();
  }

}
