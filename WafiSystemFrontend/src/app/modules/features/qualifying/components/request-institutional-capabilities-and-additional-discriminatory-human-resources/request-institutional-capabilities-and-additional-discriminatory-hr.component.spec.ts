import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from './request-institutional-capabilities-and-additional-discriminatory-human-resources.component';

describe('RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent', () => {
  let component: RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent;
  let fixture: ComponentFixture<RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
