import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectManagerComponent } from './update-project-manager.component';

describe('UpdateProjectManagerComponent', () => {
  let component: UpdateProjectManagerComponent;
  let fixture: ComponentFixture<UpdateProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
