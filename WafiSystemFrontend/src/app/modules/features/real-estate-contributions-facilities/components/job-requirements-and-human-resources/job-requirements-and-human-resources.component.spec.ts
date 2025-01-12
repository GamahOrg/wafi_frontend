import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequirementsAndHumanResourcesComponent } from './job-requirements-and-human-resources.component';

describe('JobRequirementsAndHumanResourcesComponent', () => {
  let component: JobRequirementsAndHumanResourcesComponent;
  let fixture: ComponentFixture<JobRequirementsAndHumanResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRequirementsAndHumanResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobRequirementsAndHumanResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
