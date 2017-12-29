import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuSettingsComponent } from './mpu-settings.component';

describe('MpuSettingsComponent', () => {
  let component: MpuSettingsComponent;
  let fixture: ComponentFixture<MpuSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpuSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
