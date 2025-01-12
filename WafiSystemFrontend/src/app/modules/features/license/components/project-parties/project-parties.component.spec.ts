import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPartiesComponent } from './project-parties.component';

describe('ProjectPartiesComponent', () => {
  let component: ProjectPartiesComponent;
  let fixture: ComponentFixture<ProjectPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
