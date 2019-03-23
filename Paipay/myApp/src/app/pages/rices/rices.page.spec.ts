import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicesPage } from './rices.page';

describe('RicesPage', () => {
  let component: RicesPage;
  let fixture: ComponentFixture<RicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
