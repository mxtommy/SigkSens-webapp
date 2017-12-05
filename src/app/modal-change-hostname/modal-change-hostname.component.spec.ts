import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChangeHostnameComponent } from './modal-change-hostname.component';

describe('ModalChangeHostnameComponent', () => {
  let component: ModalChangeHostnameComponent;
  let fixture: ComponentFixture<ModalChangeHostnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChangeHostnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChangeHostnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
