import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo, ISensorObject } from '../sensor-api.service';

@Component({
  selector: 'app-mpu-settings',
  templateUrl: './mpu-settings.component.html',
  styleUrls: ['./mpu-settings.component.css']
})
export class MpuSettingsComponent implements OnInit, OnDestroy {

  sensorInfoSub: Subscription;
  timer: FormControl = new FormControl('', Validators.required);

  sensors: ISensorObject[] = [];
  

  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        

        if (sensorInfo.timers['mpu925x']) {
          this.timer.setValue(sensorInfo.timers['mpu925x']);
        }

        this.sensors = sensorInfo["sensors"].filter(function (sensor) { return sensor.type == "mpu925x" });
        
        
      });
      

  }

  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }

  saveTimer() {
    this.SensorApiService.setNewTimerValue('mpu925x', this.timer.value);
    this.timer.markAsPristine();
  }
}
