import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

interface IGetSensorResponse {
  '1wSensors'?: { address: string; signalkPath: string; tempK: number }[];
}


@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {

  sensors = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IGetSensorResponse>('http://192.168.0.50/getSensors').subscribe(
      data => {
        if (data['sensors'] !== undefined) {
          this.sensors = data['sensors'];
        }
       
      },
      err => {
        console.log('Unable to fetch sensorList');
        console.log(err);
      }
    )

  }

}
