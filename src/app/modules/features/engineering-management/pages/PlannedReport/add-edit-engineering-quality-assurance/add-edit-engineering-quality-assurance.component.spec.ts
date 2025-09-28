import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEngineeringQualityAssuranceComponent } from './add-edit-engineering-quality-assurance.component';

describe('AddEditEngineeringQualityAssuranceComponent', () => {
  let component: AddEditEngineeringQualityAssuranceComponent;
  let fixture: ComponentFixture<AddEditEngineeringQualityAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEngineeringQualityAssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEngineeringQualityAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
