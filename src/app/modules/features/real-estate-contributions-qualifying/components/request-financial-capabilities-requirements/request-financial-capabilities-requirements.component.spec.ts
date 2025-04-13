import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFinancialCapabilitiesRequirementsComponent } from './request-financial-capabilities-requirements.component';

describe('RequestFinancialCapabilitiesRequirementsComponent', () => {
  let component: RequestFinancialCapabilitiesRequirementsComponent;
  let fixture: ComponentFixture<RequestFinancialCapabilitiesRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFinancialCapabilitiesRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestFinancialCapabilitiesRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
