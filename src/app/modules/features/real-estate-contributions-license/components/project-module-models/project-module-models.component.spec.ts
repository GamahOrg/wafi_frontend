import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModuleModelsComponent } from './project-module-models.component';

describe('ProjectModuleModelsComponent', () => {
  let component: ProjectModuleModelsComponent;
  let fixture: ComponentFixture<ProjectModuleModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModuleModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModuleModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
