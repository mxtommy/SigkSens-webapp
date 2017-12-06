import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo } from '../sensor-api.service';

@Component({
  selector: 'app-timmer-settings',
  templateUrl: './timmer-settings.component.html',
  styleUrls: ['./timmer-settings.component.css']
})
export class TimmerSettingsComponent implements OnInit, OnDestroy {

  sensorInfoSub: Subscription;
  timers: {};

  timerOneWire: FormControl = new FormControl('', Validators.required);
  timerMpu925x: FormControl = new FormControl('', Validators.required);
  timerSHT30: FormControl = new FormControl('', Validators.required);

  constructor(private SensorApiService: SensorApiService) { }

  ngOnInit() {

    this.timerOneWire.disable();
    this.timerSHT30.disable();
    this.timerMpu925x.disable();
    

    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        this.timers = sensorInfo['timers'];

        if (this.timers['oneWire']) {
          this.timerOneWire.enable();
          this.timerOneWire.setValue(this.timers['oneWire']);
        }

        if (this.timers['sht30']) {
          this.timerSHT30.enable();
          this.timerSHT30.setValue(this.timers['sht30']);
        }

      });
  }


  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }

  saveOneWire() {
    this.SensorApiService.setNewTimerValue('oneWire', this.timerOneWire.value);
    this.timerOneWire.markAsPristine();
  }

  saveSHT30() {
    this.SensorApiService.setNewTimerValue('sht30', this.timerSHT30.value);
    this.timerSHT30.markAsPristine();
  }

  saveMpu925x() {
    this.SensorApiService.setNewTimerValue('mpu925x', this.timerMpu925x.value);
    this.timerMpu925x.markAsPristine();
  }

}
