import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectFinancialIndicatorFormComponent } from './license-project-financial-indicator-form.component';

describe('LicenseProjectFinancialIndicatorFormComponent', () => {
  let component: LicenseProjectFinancialIndicatorFormComponent;
  let fixture: ComponentFixture<LicenseProjectFinancialIndicatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectFinancialIndicatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectFinancialIndicatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
