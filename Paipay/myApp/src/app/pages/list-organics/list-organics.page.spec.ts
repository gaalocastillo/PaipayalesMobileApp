import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganicsPage } from './list-organics.page';

describe('ListOrganicsPage', () => {
  let component: ListOrganicsPage;
  let fixture: ComponentFixture<ListOrganicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrganicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
