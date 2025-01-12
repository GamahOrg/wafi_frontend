import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from './request-engineers-with-sufficient-training-for-the-engineering-consultant.component';

describe('RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent', () => {
  let component: RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent;
  let fixture: ComponentFixture<RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
