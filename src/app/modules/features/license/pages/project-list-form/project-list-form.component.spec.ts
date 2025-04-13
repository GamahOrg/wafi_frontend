import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListFormComponent } from './project-list-form.component';

describe('ProjectListFormComponent', () => {
  let component: ProjectListFormComponent;
  let fixture: ComponentFixture<ProjectListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
