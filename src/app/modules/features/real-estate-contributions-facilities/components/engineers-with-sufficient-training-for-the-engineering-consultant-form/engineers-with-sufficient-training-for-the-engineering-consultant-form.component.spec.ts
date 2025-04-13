import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent } from './engineers-with-sufficient-training-for-the-engineering-consultant-form.component';

describe('EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent', () => {
  let component: EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent;
  let fixture: ComponentFixture<EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
