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

export interface ISensorInfo {
  sensors: ISensorObject[];
}

@Injectable()
export class SensorApiService {

  //hostname: BehaviorSubject<string> = new BehaviorSubject<string>(window.location.host);
  hostname: BehaviorSubject<string> = new BehaviorSubject<string>("192.168.0.50");
  sensorInfo: BehaviorSubject<ISensorInfo> = new BehaviorSubject<ISensorInfo>(null);
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
    this.http.get<ISensorInfo>('http://'+ this.hostname.getValue() + '/getSensorInfo').subscribe(
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

  getSensorInfoAsO() {
    return this.sensorInfo.asObservable();
  }


  //savers. surely better way to do this than one by one, but oh well
  saveNewHostname(newHost: string) {
    this.http.get('http://'+ this.hostname.getValue() + '/setNewHostname?hostname=' + newHost).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save hostname');
        console.log(err);
      }
    )    
  }

  saveSignalKHost(newHost: string) {
    this.http.get('http://'+ this.hostname.getValue() + '/setSignalKHost?host=' + newHost).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save');
        console.log(err);
      }
    )       
  }

  saveSignalKPort(newPort: number) {
    this.http.get('http://'+ this.hostname.getValue() + '/setSignalKPort?port=' + newPort).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save');
        console.log(err);
      }
    )   
  }

  saveSignalKPath(newPath: string) {
    this.http.get('http://'+ this.hostname.getValue() + '/setSignalKPath?path=' + newPath).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save');
        console.log(err);
      }
    )  
  }

  setNewTimerValue(timer:string, value: number) {
    this.http.get('http://'+ this.hostname.getValue() + '/setTimerDelay?timer=' + timer +'&delay='+value).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save');
        console.log(err);
      }
    )      
  }

  setSensorPath(address: string, attrName: string, path: string) {
    this.http.get('http://'+ this.hostname.getValue() + '/setSensorPath?address=' + address + '&attrName=' + attrName + '&path=' + path).subscribe(
      data => {
        this.status.next(true);
      },
      err => {
        this.status.next(false);
        console.log('Unable to save');
        console.log(err);
      }      
    );
  }

}
