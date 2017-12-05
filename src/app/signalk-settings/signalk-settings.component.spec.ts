import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalkSettingsComponent } from './signalk-settings.component';

describe('SignalkSettingsComponent', () => {
  let component: SignalkSettingsComponent;
  let fixture: ComponentFixture<SignalkSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalkSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalkSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
