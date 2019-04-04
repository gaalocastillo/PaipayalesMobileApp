import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendPage } from './email-send.page';

describe('EmailSendPage', () => {
  let component: EmailSendPage;
  let fixture: ComponentFixture<EmailSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
