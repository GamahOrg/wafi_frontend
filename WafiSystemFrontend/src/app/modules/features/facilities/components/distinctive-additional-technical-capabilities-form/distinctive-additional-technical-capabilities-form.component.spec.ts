import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctiveAdditionalTechnicalCapabilitiesFormComponent } from './distinctive-additional-technical-capabilities-form.component';

describe('DistinctiveAdditionalTechnicalCapabilitiesFormComponent', () => {
  let component: DistinctiveAdditionalTechnicalCapabilitiesFormComponent;
  let fixture: ComponentFixture<DistinctiveAdditionalTechnicalCapabilitiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctiveAdditionalTechnicalCapabilitiesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctiveAdditionalTechnicalCapabilitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
