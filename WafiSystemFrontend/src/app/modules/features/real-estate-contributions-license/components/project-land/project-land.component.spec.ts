import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandComponent } from './project-land.component';

describe('ProjectLandComponent', () => {
  let component: ProjectLandComponent;
  let fixture: ComponentFixture<ProjectLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
