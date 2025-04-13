import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandTitleDeedsFormComponent } from './project-land-title-deeds-form.component';

describe('ProjectLandTitleDeedsFormComponent', () => {
  let component: ProjectLandTitleDeedsFormComponent;
  let fixture: ComponentFixture<ProjectLandTitleDeedsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLandTitleDeedsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLandTitleDeedsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
