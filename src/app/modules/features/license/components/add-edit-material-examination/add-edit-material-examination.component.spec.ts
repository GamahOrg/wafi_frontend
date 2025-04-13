import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMaterialExaminationComponent } from './add-edit-material-examination.component';

describe('AddEditMaterialExaminationComponent', () => {
  let component: AddEditMaterialExaminationComponent;
  let fixture: ComponentFixture<AddEditMaterialExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMaterialExaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMaterialExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
