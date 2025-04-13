import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualRelativeWeightComponent } from './add-edit-actual-relative-weight.component';

describe('AddEditActualRelativeWeightComponent', () => {
  let component: AddEditActualRelativeWeightComponent;
  let fixture: ComponentFixture<AddEditActualRelativeWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualRelativeWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualRelativeWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
