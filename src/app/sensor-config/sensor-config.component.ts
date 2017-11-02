import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


interface IGetSensorResponse {
  '1wSensors'?: { address: string; signalkPath: string; tempK: number }[];
}


@Component({
  selector: 'app-sensor-config',
  templateUrl: './sensor-config.component.html',
  styleUrls: ['./sensor-config.component.css']
})
export class SensorConfigComponent implements OnInit {

  sensors1w = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IGetSensorResponse>('http://192.168.0.50/getSensors').subscribe(
      data => {
        if (data['1wSensors'] !== undefined) {
          this.sensors1w = data['1wSensors'];
        }
       
      },
      err => {
        console.log('Unable to fetch sensorList');
      }
    )

  }

}
