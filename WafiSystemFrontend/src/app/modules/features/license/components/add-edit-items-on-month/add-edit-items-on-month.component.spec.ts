import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditItemsOnMonthComponent } from './add-edit-items-on-month.component';

describe('AddEditItemsOnMonthComponent', () => {
  let component: AddEditItemsOnMonthComponent;
  let fixture: ComponentFixture<AddEditItemsOnMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditItemsOnMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditItemsOnMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
