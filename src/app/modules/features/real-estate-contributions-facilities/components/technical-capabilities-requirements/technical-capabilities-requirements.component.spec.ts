import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCapabilitiesRequirementsComponent } from './technical-capabilities-requirements.component';

describe('TechnicalCapabilitiesRequirementsComponent', () => {
  let component: TechnicalCapabilitiesRequirementsComponent;
  let fixture: ComponentFixture<TechnicalCapabilitiesRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalCapabilitiesRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalCapabilitiesRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
