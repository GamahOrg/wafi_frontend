import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandTitleDeedsComponent } from './project-land-title-deeds.component';

describe('ProjectLandTitleDeedsComponent', () => {
  let component: ProjectLandTitleDeedsComponent;
  let fixture: ComponentFixture<ProjectLandTitleDeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLandTitleDeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLandTitleDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
