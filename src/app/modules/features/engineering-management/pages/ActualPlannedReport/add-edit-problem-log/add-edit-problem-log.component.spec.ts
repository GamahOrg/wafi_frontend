import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProblemLogComponent } from './add-edit-problem-log.component';

describe('AddEditProblemLogComponent', () => {
  let component: AddEditProblemLogComponent;
  let fixture: ComponentFixture<AddEditProblemLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProblemLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProblemLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
