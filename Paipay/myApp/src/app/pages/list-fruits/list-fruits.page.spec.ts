import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFruitsPage } from './list-fruits.page';

describe('ListFruitsPage', () => {
  let component: ListFruitsPage;
  let fixture: ComponentFixture<ListFruitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFruitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFruitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
