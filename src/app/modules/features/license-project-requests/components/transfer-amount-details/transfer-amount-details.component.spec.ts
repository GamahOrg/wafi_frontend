import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAmountDetailsComponent } from './transfer-amount-details.component';

describe('TransferAmountDetailsComponent', () => {
  let component: TransferAmountDetailsComponent;
  let fixture: ComponentFixture<TransferAmountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferAmountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferAmountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
