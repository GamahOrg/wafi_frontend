import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDangerLogComponent } from './add-edit-danger-log.component';

describe('AddEditDangerLogComponent', () => {
  let component: AddEditDangerLogComponent;
  let fixture: ComponentFixture<AddEditDangerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDangerLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDangerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
