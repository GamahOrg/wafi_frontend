import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransferAmountRequestComponent } from './edit-transfer-amount-request.component';

describe('EditTransferAmountRequestComponent', () => {
  let component: EditTransferAmountRequestComponent;
  let fixture: ComponentFixture<EditTransferAmountRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferAmountRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransferAmountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
