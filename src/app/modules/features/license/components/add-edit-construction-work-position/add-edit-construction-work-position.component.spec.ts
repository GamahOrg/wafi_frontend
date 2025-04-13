import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConstructionWorkPositionComponent } from './add-edit-construction-work-position.component';

describe('AddEditConstructionWorkPositionComponent', () => {
  let component: AddEditConstructionWorkPositionComponent;
  let fixture: ComponentFixture<AddEditConstructionWorkPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConstructionWorkPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditConstructionWorkPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
