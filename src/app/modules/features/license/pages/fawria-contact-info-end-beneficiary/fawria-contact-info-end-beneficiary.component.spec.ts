import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawriaContactInfoEndBeneficiaryComponent } from './fawria-contact-info-end-beneficiary.component';

describe('FawriaContactInfoEndBeneficiaryComponent', () => {
  let component: FawriaContactInfoEndBeneficiaryComponent;
  let fixture: ComponentFixture<FawriaContactInfoEndBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawriaContactInfoEndBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawriaContactInfoEndBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
