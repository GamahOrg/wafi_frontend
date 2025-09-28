import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualQualityControlComponent } from './add-edit-actual-quality-control.component';

describe('AddEditActualQualityControlComponent', () => {
  let component: AddEditActualQualityControlComponent;
  let fixture: ComponentFixture<AddEditActualQualityControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualQualityControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualQualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
