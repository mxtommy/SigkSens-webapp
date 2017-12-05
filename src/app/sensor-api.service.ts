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

interface ISensorResponse {
  sensors: ISensorObject[];
}

@Injectable()
export class SensorApiService {

  hostname: BehaviorSubject<string> = new BehaviorSubject<string>(window.location.host);
  sensorInfo: Subject<ISensorResponse> = new Subject<ISensorResponse>();
  status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    this.reset();
  }

  getStatusAsO()  {
    return this.status.asObservable();
  }
  getHostNameAsO() {
    return this.hostname.asObservable();
  }
  getHostName() {
    return this.hostname.getValue();
  }

  setHostName(newHost: string) {
    this.hostname.next(newHost);
    this.reset();
  }

  reset() {
    this.status.next(false);
    this.fetchInfo();
  }



  fetchInfo() {
    this.http.get<ISensorResponse>('http://'+ this.hostname.getValue() + '/getSensors').subscribe(
      data => {
        this.sensorInfo.next(data);
        this.status.next(true);
        //this.webSocket = new WebSocket("ws://192.168.0.52:81");
      },
      err => {
        console.log('Unable to fetch sensorList');
        console.log(err);
      }
    )
  }




}
