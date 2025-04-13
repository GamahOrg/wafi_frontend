import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectBlockComponent } from './add-edit-project-block.component';

describe('AddEditProjectBlockComponent', () => {
  let component: AddEditProjectBlockComponent;
  let fixture: ComponentFixture<AddEditProjectBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProjectBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProjectBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
