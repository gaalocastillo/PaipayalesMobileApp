import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicsPage } from './organics.page';

describe('OrganicsPage', () => {
  let component: OrganicsPage;
  let fixture: ComponentFixture<OrganicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
