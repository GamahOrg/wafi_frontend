import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctiveAdditionalTechnicalCapabilitiesComponent } from './distinctive-additional-technical-capabilities.component';

describe('DistinctiveAdditionalTechnicalCapabilitiesComponent', () => {
  let component: DistinctiveAdditionalTechnicalCapabilitiesComponent;
  let fixture: ComponentFixture<DistinctiveAdditionalTechnicalCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctiveAdditionalTechnicalCapabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctiveAdditionalTechnicalCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
