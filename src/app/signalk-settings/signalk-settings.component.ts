import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, Validators } from '@angular/forms';

import { SensorApiService, ISensorInfo } from '../sensor-api.service';



@Component({
  selector: 'app-signalk-settings',
  templateUrl: './signalk-settings.component.html',
  styleUrls: ['./signalk-settings.component.css']
})
export class SignalkSettingsComponent implements OnInit, OnDestroy {

  sensorInfoSub: Subscription;
  sensorInfo: ISensorInfo;

  //form elements
  sensorHostname: FormControl = new FormControl('', Validators.required);
  signalkHost: FormControl = new FormControl('', Validators.required);
  signalkPort: FormControl = new FormControl('', Validators.required);
  signalkPath: FormControl = new FormControl('', Validators.required);
  


  constructor(private SensorApiService: SensorApiService) { }

  ngOnInit() {
    this.sensorInfoSub = this.SensorApiService.getSensorInfoAsO().subscribe(
      sensorInfo => {
        if (sensorInfo === null) { return; }
        
        this.sensorHostname.setValue(sensorInfo["hostname"]);
        this.signalkHost.setValue(sensorInfo["signalKHost"]);
        this.signalkPort.setValue(sensorInfo["signalKPort"]);
        this.signalkPath.setValue(sensorInfo["signalKPath"]);
      });
  }


  ngOnDestroy() {
    this.sensorInfoSub.unsubscribe();
  }

  saveHostname() {
    this.SensorApiService.saveNewHostname(this.sensorHostname.value);
    this.sensorHostname.markAsPristine();
  }

  saveSignalKHost() {
    this.SensorApiService.saveSignalKHost(this.signalkHost.value);
    this.signalkHost.markAsPristine();
  }

  saveSignalKPort() {
    this.SensorApiService.saveSignalKPort(this.signalkPort.value);
    this.signalkPort.markAsPristine();
  }

  saveSignalKPath() {
    this.SensorApiService.saveSignalKPath(this.signalkPath.value);
    this.signalkPath.markAsPristine();
  }








}
