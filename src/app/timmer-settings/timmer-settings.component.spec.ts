import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimmerSettingsComponent } from './timmer-settings.component';

describe('TimmerSettingsComponent', () => {
  let component: TimmerSettingsComponent;
  let fixture: ComponentFixture<TimmerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimmerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimmerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
