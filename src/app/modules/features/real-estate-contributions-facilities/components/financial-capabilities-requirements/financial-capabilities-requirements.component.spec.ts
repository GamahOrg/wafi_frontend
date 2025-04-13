import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCapabilitiesRequirementsComponent } from './financial-capabilities-requirements.component';

describe('FinancialCapabilitiesRequirementsComponent', () => {
  let component: FinancialCapabilitiesRequirementsComponent;
  let fixture: ComponentFixture<FinancialCapabilitiesRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCapabilitiesRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCapabilitiesRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
