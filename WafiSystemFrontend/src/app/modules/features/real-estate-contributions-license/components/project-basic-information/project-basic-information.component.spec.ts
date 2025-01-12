import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasicInformationComponent } from './project-basic-information.component';

describe('ProjectBasicInformationComponent', () => {
  let component: ProjectBasicInformationComponent;
  let fixture: ComponentFixture<ProjectBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBasicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
