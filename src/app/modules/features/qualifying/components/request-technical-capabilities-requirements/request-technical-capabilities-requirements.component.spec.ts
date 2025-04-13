import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTechnicalCapabilitiesRequirementsComponent } from './request-technical-capabilities-requirements.component';

describe('RequestTechnicalCapabilitiesRequirementsComponent', () => {
  let component: RequestTechnicalCapabilitiesRequirementsComponent;
  let fixture: ComponentFixture<RequestTechnicalCapabilitiesRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTechnicalCapabilitiesRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTechnicalCapabilitiesRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
