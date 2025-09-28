import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualQualityAndBusinessComponent } from './add-edit-actual-quality-and-business.component';

describe('AddEditActualQualityAndBusinessComponent', () => {
  let component: AddEditActualQualityAndBusinessComponent;
  let fixture: ComponentFixture<AddEditActualQualityAndBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualQualityAndBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualQualityAndBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
