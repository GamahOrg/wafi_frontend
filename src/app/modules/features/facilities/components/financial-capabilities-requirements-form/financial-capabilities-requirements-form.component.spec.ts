import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCapabilitiesRequirementsFormComponent } from './financial-capabilities-requirements-form.component';

describe('FinancialCapabilitiesRequirementsFormComponent', () => {
  let component: FinancialCapabilitiesRequirementsFormComponent;
  let fixture: ComponentFixture<FinancialCapabilitiesRequirementsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCapabilitiesRequirementsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCapabilitiesRequirementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
