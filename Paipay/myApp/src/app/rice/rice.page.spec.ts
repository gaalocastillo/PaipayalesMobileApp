import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicePage } from './rice.page';

describe('RicePage', () => {
  let component: RicePage;
  let fixture: ComponentFixture<RicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
