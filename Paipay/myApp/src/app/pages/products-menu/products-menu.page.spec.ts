import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMenuPage } from './products-menu.page';

describe('ProductsMenuPage', () => {
  let component: ProductsMenuPage;
  let fixture: ComponentFixture<ProductsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
