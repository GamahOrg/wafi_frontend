import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOwnersComponent } from './project-owners.component';

describe('ProjectOwnersComponent', () => {
  let component: ProjectOwnersComponent;
  let fixture: ComponentFixture<ProjectOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
