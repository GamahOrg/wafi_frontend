import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperProjectListComponent } from './developer-project-list.component';

describe('DeveloperProjectListComponent', () => {
  let component: DeveloperProjectListComponent;
  let fixture: ComponentFixture<DeveloperProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
