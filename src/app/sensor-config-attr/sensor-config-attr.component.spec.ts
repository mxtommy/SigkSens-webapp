import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorConfigAttrComponent } from './sensor-config-attr.component';

describe('SensorConfigAttrComponent', () => {
  let component: SensorConfigAttrComponent;
  let fixture: ComponentFixture<SensorConfigAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorConfigAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorConfigAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
