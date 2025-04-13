import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectFinancialIndicatorComponent } from './license-project-financial-indicator.component';

describe('LicenseProjectFinancialIndicatorComponent', () => {
  let component: LicenseProjectFinancialIndicatorComponent;
  let fixture: ComponentFixture<LicenseProjectFinancialIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectFinancialIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectFinancialIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
