import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenpassPage } from './forgottenpass.page';

describe('ForgottenpassPage', () => {
  let component: ForgottenpassPage;
  let fixture: ComponentFixture<ForgottenpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
