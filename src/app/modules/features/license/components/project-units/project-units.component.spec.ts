import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUnitsComponent } from './project-units.component';

describe('ProjectUnitsComponent', () => {
  let component: ProjectUnitsComponent;
  let fixture: ComponentFixture<ProjectUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
