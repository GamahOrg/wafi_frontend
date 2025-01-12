import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAccountantRequestComponent } from './add-edit-accountant-request.component';

describe('AddEditAccountantRequestComponent', () => {
  let component: AddEditAccountantRequestComponent;
  let fixture: ComponentFixture<AddEditAccountantRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAccountantRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAccountantRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
