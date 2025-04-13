import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationFacilityCertificationComponent } from './qualification-facility-certification.component';

describe('QualificationFacilityCertificationComponent', () => {
  let component: QualificationFacilityCertificationComponent;
  let fixture: ComponentFixture<QualificationFacilityCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationFacilityCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationFacilityCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
