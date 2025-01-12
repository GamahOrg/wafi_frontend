import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManegersComponent } from './projects-manegers.component';

describe('ProjectsManegersComponent', () => {
  let component: ProjectsManegersComponent;
  let fixture: ComponentFixture<ProjectsManegersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsManegersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsManegersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
