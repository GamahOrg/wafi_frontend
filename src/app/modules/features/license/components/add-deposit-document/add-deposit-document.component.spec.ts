import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepositDocumentComponent } from './add-deposit-document.component';

describe('AddDepositDocumentComponent', () => {
  let component: AddDepositDocumentComponent;
  let fixture: ComponentFixture<AddDepositDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepositDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepositDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
