import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo, ISensorObject } from '../sensor-api.service';

@Component({
  selector: 'app-digital-in-settings',
  templateUrl: './digital-in-settings.component.html',
  styleUrls: ['./digital-in-settings.component.css']
})
export class DigitalInSettingsComponent implements OnInit, OnDestroy {

  sensorInfoSub: Subscription;
  timer: FormControl = new FormControl('', Validators.required);
  //d1Mode: number = 0;
  d1Mode: FormControl = new FormControl('', Validators.required);
  d2Mode: FormControl = new FormControl('', Validators.required);
  
  sensors: ISensorObject[] = [];
  
  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }

        if (sensorInfo.timers['digitalIn']) {
          this.timer.setValue(sensorInfo.timers['digitalIn']);
        }

        this.d1Mode.setValue(sensorInfo.d1Mode);
        this.d2Mode.setValue(sensorInfo.d2Mode);
        
        this.sensors = sensorInfo["sensors"].filter(function (sensor) { return sensor.type == "digitalIn" });
        

      });
      

  }


//setDigitalInputMode

  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }


  saveTimer() {
    this.SensorApiService.setNewTimerValue('digitalIn', this.timer.value);
    this.timer.markAsPristine();
  }

  saveD1Mode() {
    this.SensorApiService.setDigitalInputMode(1,this.d1Mode.value);
    this.d1Mode.markAsPristine();
  }

  saveD2Mode() {
    this.SensorApiService.setDigitalInputMode(2,this.d2Mode.value);
    this.d2Mode.markAsPristine();
  }

}
