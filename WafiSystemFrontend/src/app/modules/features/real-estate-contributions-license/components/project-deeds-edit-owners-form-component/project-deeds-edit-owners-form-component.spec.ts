import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeedsEditOwnersFormComponent } from './project-deeds-edit-owners-form.component';

describe('ProjectDeedsEditOwnersFormComponentComponent', () => {
  let component: ProjectDeedsEditOwnersFormComponent;
  let fixture: ComponentFixture<ProjectDeedsEditOwnersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDeedsEditOwnersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDeedsEditOwnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
