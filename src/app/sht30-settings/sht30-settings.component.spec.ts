import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sht30SettingsComponent } from './sht30-settings.component';

describe('Sht30SettingsComponent', () => {
  let component: Sht30SettingsComponent;
  let fixture: ComponentFixture<Sht30SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sht30SettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sht30SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
