import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectFinancialStatementComponent } from './license-project-financial-statement.component';

describe('LicenseProjectFinancialStatementComponent', () => {
  let component: LicenseProjectFinancialStatementComponent;
  let fixture: ComponentFixture<LicenseProjectFinancialStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectFinancialStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectFinancialStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
