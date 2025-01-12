import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequirementsAndHumanResourcesFormComponent } from './job-requirements-and-human-resources-form.component';

describe('JobRequirementsAndHumanResourcesFormComponent', () => {
  let component: JobRequirementsAndHumanResourcesFormComponent;
  let fixture: ComponentFixture<JobRequirementsAndHumanResourcesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRequirementsAndHumanResourcesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobRequirementsAndHumanResourcesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
