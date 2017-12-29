import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalInSettingsComponent } from './digital-in-settings.component';

describe('DigitalInSettingsComponent', () => {
  let component: DigitalInSettingsComponent;
  let fixture: ComponentFixture<DigitalInSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalInSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalInSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
