import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewireSettingsComponent } from './onewire-settings.component';

describe('OnewireSettingsComponent', () => {
  let component: OnewireSettingsComponent;
  let fixture: ComponentFixture<OnewireSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewireSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewireSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
