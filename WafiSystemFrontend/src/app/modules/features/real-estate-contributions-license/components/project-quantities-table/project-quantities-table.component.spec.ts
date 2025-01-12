import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectQuantitiesTableComponent } from './project-quantities-table.component';

describe('ProjectQuantitiesTableComponent', () => {
  let component: ProjectQuantitiesTableComponent;
  let fixture: ComponentFixture<ProjectQuantitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectQuantitiesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectQuantitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
