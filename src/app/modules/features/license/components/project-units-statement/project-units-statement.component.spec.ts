import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUnitsStatementComponent } from './project-units-statement.component';

describe('ProjectUnitsStatementComponent', () => {
  let component: ProjectUnitsStatementComponent;
  let fixture: ComponentFixture<ProjectUnitsStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUnitsStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUnitsStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
