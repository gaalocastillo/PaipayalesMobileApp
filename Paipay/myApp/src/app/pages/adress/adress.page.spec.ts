import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressPage } from './adress.page';

describe('AdressPage', () => {
  let component: AdressPage;
  let fixture: ComponentFixture<AdressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
