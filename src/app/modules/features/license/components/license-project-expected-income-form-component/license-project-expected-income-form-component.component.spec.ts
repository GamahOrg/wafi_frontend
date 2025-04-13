import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExpectedIncomeFormComponentComponent } from './license-project-expected-income-form-component.component';

describe('LicenseProjectExpectedIncomeFormComponentComponent', () => {
  let component: LicenseProjectExpectedIncomeFormComponentComponent;
  let fixture: ComponentFixture<LicenseProjectExpectedIncomeFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExpectedIncomeFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExpectedIncomeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
