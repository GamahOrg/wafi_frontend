import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent } from './institutional-capabilities-and-additional-discriminatory-human-resources-form.component';

describe('InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent', () => {
  let component: InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent;
  let fixture: ComponentFixture<InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
