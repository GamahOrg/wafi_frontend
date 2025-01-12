import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTechnicalCapabilitiesRequirementsComponent } from './save-technical-capabilities-requirements.component';

describe('SaveTechnicalCapabilitiesRequirementsComponent', () => {
  let component: SaveTechnicalCapabilitiesRequirementsComponent;
  let fixture: ComponentFixture<SaveTechnicalCapabilitiesRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTechnicalCapabilitiesRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveTechnicalCapabilitiesRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
