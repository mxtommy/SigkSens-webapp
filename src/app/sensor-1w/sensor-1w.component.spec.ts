import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor1wComponent } from './sensor-1w.component';

describe('Sensor1wComponent', () => {
  let component: Sensor1wComponent;
  let fixture: ComponentFixture<Sensor1wComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sensor1wComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sensor1wComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
