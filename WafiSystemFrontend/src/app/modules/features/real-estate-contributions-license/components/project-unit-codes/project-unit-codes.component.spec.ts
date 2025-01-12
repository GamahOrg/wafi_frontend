import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUnitCodesComponent } from './project-unit-codes.component';

describe('ProjectUnitCodesComponent', () => {
  let component: ProjectUnitCodesComponent;
  let fixture: ComponentFixture<ProjectUnitCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUnitCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUnitCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
