import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDistinctiveAdditionalTechnicalCapabilitiesComponent } from './request-distinctive-additional-technical-capabilities.component';

describe('RequestDistinctiveAdditionalTechnicalCapabilitiesComponent', () => {
  let component: RequestDistinctiveAdditionalTechnicalCapabilitiesComponent;
  let fixture: ComponentFixture<RequestDistinctiveAdditionalTechnicalCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDistinctiveAdditionalTechnicalCapabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDistinctiveAdditionalTechnicalCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
