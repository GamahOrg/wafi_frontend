import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedAnnualBalanceSheetFormComponent } from './expected-annual-balance-sheet-form.component';

describe('ExpectedAnnualBalanceSheetFormComponent', () => {
  let component: ExpectedAnnualBalanceSheetFormComponent;
  let fixture: ComponentFixture<ExpectedAnnualBalanceSheetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedAnnualBalanceSheetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedAnnualBalanceSheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
