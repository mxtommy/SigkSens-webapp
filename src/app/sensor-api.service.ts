import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

interface ISensorObject {
  address: string; 
  type: string;
  attr: {
    attrName: string;
    signalKPath: string;
    value: number;
  }
}

interface IGetSensorResponse {
  sensors: ISensorObject[];
}


@Injectable()
export class SensorApiService {

  hostname: BehaviorSubject<string> = new BehaviorSubject<string>(window.location.host);
  sensors: Subject<ISensorObject[]> = new Subject<ISensorObject[]>();

  constructor(private http: HttpClient) { 
    this.getSensors();
  }

  getHostNameAsO() {
    return this.hostname.asObservable();
  }
  getHostName() {
    return this.hostname.getValue();
  }

  setHostName(newHost: string) {
    this.hostname.next(newHost);
  }

  getSensors() {
    this.http.get<IGetSensorResponse>('http://'+ this.hostname.getValue() + '/getSensors').subscribe(
      data => {
        this.sensors.next(data['sensors']);
        //this.webSocket = new WebSocket("ws://192.168.0.52:81");
      },
      err => {
        console.log('Unable to fetch sensorList');
        console.log(err);
      }
    )
  }

}
