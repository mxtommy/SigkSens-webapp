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

  d1Mode: number = 0;
  d2Mode: number = 0;
  
  constructor(private SensorApiService: SensorApiService) { }
  
  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }

        if (sensorInfo.timers['digitalIn']) {
          this.timer.setValue(sensorInfo.timers['digitalIn']);
        }

        this.d1Mode = sensorInfo.d1Mode;
        this.d2Mode = sensorInfo.d2Mode;
        
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

}
