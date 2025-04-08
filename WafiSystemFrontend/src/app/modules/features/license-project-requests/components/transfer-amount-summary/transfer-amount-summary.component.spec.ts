import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAmountSummaryComponent } from './transfer-amount-summary.component';

describe('TransferAmountSummaryComponent', () => {
  let component: TransferAmountSummaryComponent;
  let fixture: ComponentFixture<TransferAmountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferAmountSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAmountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
