import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDeedsOwnerFormComponent } from './project-deeds-owner-form.component';

describe('ProjectDeedsOwnerFormComponent', () => {
  let component: ProjectDeedsOwnerFormComponent;
  let fixture: ComponentFixture<ProjectDeedsOwnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDeedsOwnerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDeedsOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
