import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualProjectDetailsComponent } from './add-edit-actual-project-details.component';

describe('AddEditActualProjectDetailsComponent', () => {
  let component: AddEditActualProjectDetailsComponent;
  let fixture: ComponentFixture<AddEditActualProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
