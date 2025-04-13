import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBusinessCaseContainerComponent } from './project-business-case-container.component';

describe('ProjectBusinessCaseContainerComponent', () => {
  let component: ProjectBusinessCaseContainerComponent;
  let fixture: ComponentFixture<ProjectBusinessCaseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBusinessCaseContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBusinessCaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
