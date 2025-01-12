import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from './engineers-with-sufficient-training-for-the-engineering-consultant.component';

describe('EngineersWithSufficientTrainingForTheEngineeringConsultantComponent', () => {
  let component: EngineersWithSufficientTrainingForTheEngineeringConsultantComponent;
  let fixture: ComponentFixture<EngineersWithSufficientTrainingForTheEngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineersWithSufficientTrainingForTheEngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineersWithSufficientTrainingForTheEngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
