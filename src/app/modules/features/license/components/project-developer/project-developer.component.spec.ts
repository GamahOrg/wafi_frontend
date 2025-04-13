import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeveloperComponent } from './project-developer.component';

describe('ProjectDeveloperComponent', () => {
  let component: ProjectDeveloperComponent;
  let fixture: ComponentFixture<ProjectDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
