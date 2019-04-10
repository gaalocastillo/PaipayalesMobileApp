import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRicesPage } from './list-rices.page';

describe('ListRicesPage', () => {
  let component: ListRicesPage;
  let fixture: ComponentFixture<ListRicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
