import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent } from './transfer-amounts-between-subaccounts-in-escrow-account-details.component';

describe('TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent', () => {
  let component: TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent;
  let fixture: ComponentFixture<TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
