import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathSettingsComponent } from './path-settings.component';

describe('SensorListComponent', () => {
  let component: PathSettingsComponent;
  let fixture: ComponentFixture<PathSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
