import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualInfrastructurComponent } from './add-edit-actual-infrastructur.component';

describe('AddEditActualInfrastructurComponent', () => {
  let component: AddEditActualInfrastructurComponent;
  let fixture: ComponentFixture<AddEditActualInfrastructurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualInfrastructurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualInfrastructurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
