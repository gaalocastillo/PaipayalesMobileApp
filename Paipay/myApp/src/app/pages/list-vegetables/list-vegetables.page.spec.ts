import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVegetablesPage } from './list-vegetables.page';

describe('ListVegetablesPage', () => {
  let component: ListVegetablesPage;
  let fixture: ComponentFixture<ListVegetablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVegetablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVegetablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
