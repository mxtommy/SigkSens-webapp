import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { signalKPaths } from '../signalk-paths.const';

interface IAttr {
  signalKPath: string;
  value: number;
}[];


@Component({
  selector: 'sensor-config',
  templateUrl: './sensor-config.component.html',
  styleUrls: ['./sensor-config.component.css']
})
export class SensorConfigComponent implements OnInit {

  pathCtrl: FormControl;
  filteredPaths: Observable<string[]>;

  @Input('address') address: string;
  @Input('path') path: string;
  @Input('attr') attr: IAttr;
  @Input('type') type: string;

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
    this.http.get('http://192.168.0.50/set1wSensorPath?address=' + this.address + '&path=' + this.pathCtrl.value).subscribe();
  }

 
}
