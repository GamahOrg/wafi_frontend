import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent } from './transfer-amounts-between-subaccounts-in-escrow-account-summary.component';

describe('TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent', () => {
  let component: TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent;
  let fixture: ComponentFixture<TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAmountsBetweenSubaccountsInEscrowAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
