import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEngineeringInfrastructureRatesComponent } from './add-edit-engineering-infrastructure-rates.component';

describe('AddEditEngineeringInfrastructureRatesComponent', () => {
  let component: AddEditEngineeringInfrastructureRatesComponent;
  let fixture: ComponentFixture<AddEditEngineeringInfrastructureRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEngineeringInfrastructureRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEngineeringInfrastructureRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
