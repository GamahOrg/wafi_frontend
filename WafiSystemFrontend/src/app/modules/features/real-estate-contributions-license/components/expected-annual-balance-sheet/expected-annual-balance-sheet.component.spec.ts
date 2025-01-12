import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedAnnualBalanceSheetComponent } from './expected-annual-balance-sheet.component';

describe('ExpectedAnnualBalanceSheetComponent', () => {
  let component: ExpectedAnnualBalanceSheetComponent;
  let fixture: ComponentFixture<ExpectedAnnualBalanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedAnnualBalanceSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedAnnualBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
