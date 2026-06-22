import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLicenseProjectAccountantAgreementDataComponent } from './change-license-project-accountant-agreement-data.component';

describe('ChangeLicenseProjectAccountantAgreementDataComponent', () => {
  let component: ChangeLicenseProjectAccountantAgreementDataComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectAccountantAgreementDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeLicenseProjectAccountantAgreementDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ChangeLicenseProjectAccountantAgreementDataComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
