import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectBusinessCaseComponent } from './add-edit-project-business-case.component';

describe('AddEditProjectBusinessCaseComponent', () => {
  let component: AddEditProjectBusinessCaseComponent;
  let fixture: ComponentFixture<AddEditProjectBusinessCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProjectBusinessCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProjectBusinessCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
