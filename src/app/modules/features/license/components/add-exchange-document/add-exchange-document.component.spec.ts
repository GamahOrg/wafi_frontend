import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExchangeDocumentComponent } from './add-exchange-document.component';

describe('AddExchangeDocumentComponent', () => {
  let component: AddExchangeDocumentComponent;
  let fixture: ComponentFixture<AddExchangeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExchangeDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExchangeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
