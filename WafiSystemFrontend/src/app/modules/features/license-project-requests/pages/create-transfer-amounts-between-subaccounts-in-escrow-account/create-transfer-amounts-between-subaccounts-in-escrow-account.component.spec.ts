import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent } from './create-transfer-amounts-between-subaccounts-in-escrow-account.component';

describe('CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent', () => {
  let component: CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent;
  let fixture: ComponentFixture<CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTransferAmountsBetweenSubaccountsInEscrowAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
