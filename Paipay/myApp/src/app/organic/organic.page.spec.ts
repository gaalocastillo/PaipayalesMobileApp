import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicPage } from './organic.page';

describe('OrganicPage', () => {
  let component: OrganicPage;
  let fixture: ComponentFixture<OrganicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
