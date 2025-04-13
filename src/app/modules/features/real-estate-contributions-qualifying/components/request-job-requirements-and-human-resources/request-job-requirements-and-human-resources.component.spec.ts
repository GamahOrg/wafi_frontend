import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestJobRequirementsAndHumanResourcesComponent } from './request-job-requirements-and-human-resources.component';

describe('RequestJobRequirementsAndHumanResourcesComponent', () => {
  let component: RequestJobRequirementsAndHumanResourcesComponent;
  let fixture: ComponentFixture<RequestJobRequirementsAndHumanResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestJobRequirementsAndHumanResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestJobRequirementsAndHumanResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
