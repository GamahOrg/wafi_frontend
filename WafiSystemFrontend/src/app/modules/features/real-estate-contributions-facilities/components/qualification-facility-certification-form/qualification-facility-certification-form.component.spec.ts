import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationFacilityCertificationFormComponent } from './qualification-facility-certification-form.component';

describe('QualificationFacilityCertificationFormComponent', () => {
  let component: QualificationFacilityCertificationFormComponent;
  let fixture: ComponentFixture<QualificationFacilityCertificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationFacilityCertificationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationFacilityCertificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
