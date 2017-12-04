import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { signalKPaths } from '../signalk-paths.const';


@Component({
  selector: 'sensor-config-attr',
  templateUrl: './sensor-config-attr.component.html',
  styleUrls: ['./sensor-config-attr.component.css']
})
export class SensorConfigAttrComponent implements OnInit {

  pathCtrl: FormControl;
  filteredPaths: Observable<string[]>;

  @Input('address') address: string;
  @Input('attrName') attrName: string;
  @Input('sensorType') sensorType: string;
  @Input('path') path: string;
  @Input('currentValue') currentValue: number;
  
  signalKPaths = [];
  newPath: string;

  constructor(private http: HttpClient) {
    this.pathCtrl = new FormControl('', [ Validators.required, this.wildCardValidator ]);
    this.filteredPaths = this.pathCtrl.valueChanges
      .startWith(null)
      .map(path =>  path ? this.filterPaths(path) : this.signalKPaths.slice())
   }


  ngOnInit() {
    this.signalKPaths = signalKPaths;
    this.pathCtrl.setValue(this.path);
  }

  filterPaths(path:string) {
    return this.signalKPaths.filter(allpaths => allpaths.indexOf(path.toLowerCase()) >= 0 );
  }

  wildCardValidator(input: FormControl) {
    const hasNoWildCard = input.value.indexOf('*') < 0;
    return hasNoWildCard ? null : { hasWildCard: true };
  }


  savePath() {
    this.http.get('http://192.168.0.52/setSensorPath?address=' + this.address + '&attrName=' + this.attrName + '&path=' + this.pathCtrl.value).subscribe();
  }

}
