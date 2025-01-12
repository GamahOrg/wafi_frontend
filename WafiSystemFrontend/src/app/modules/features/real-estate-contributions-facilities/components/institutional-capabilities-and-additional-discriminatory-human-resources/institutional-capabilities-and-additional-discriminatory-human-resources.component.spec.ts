import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from './institutional-capabilities-and-additional-discriminatory-human-resources.component';

describe('InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent', () => {
  let component: InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent;
  let fixture: ComponentFixture<InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
