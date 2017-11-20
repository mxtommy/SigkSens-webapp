import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

interface IGetSensorResponse {
   address: string; 
    type: string;
    attr: {
      attrName: string;
      signalKPath: string;
      value: number;
    }[];
  }[];


@Component({
  selector: 'sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  sensors = [];
  webSocket;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IGetSensorResponse>('http://192.168.0.64/getSensors').subscribe(
      data => {
        if (data['sensors'] !== undefined) {
          this.sensors = data['sensors'];
        }
        this.webSocket = new WebSocket("ws://192.168.0.64:81");
      },
      err => {
        console.log('Unable to fetch sensorList');
        console.log(err);
      }
    )




  }

}
