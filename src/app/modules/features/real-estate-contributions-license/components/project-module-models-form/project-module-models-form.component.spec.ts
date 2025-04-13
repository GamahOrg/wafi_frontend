import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModuleModelsFormComponent } from './project-module-models-form.component';

describe('ProjectModuleModelsFormComponent', () => {
  let component: ProjectModuleModelsFormComponent;
  let fixture: ComponentFixture<ProjectModuleModelsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModuleModelsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModuleModelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
