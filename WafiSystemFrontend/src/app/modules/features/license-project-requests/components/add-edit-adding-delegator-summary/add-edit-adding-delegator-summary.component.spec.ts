import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAddingDelegatorSummaryComponent } from './add-edit-adding-delegator-summary.component';

describe('AddEditAddingDelegatorSummaryComponent', () => {
  let component: AddEditAddingDelegatorSummaryComponent;
  let fixture: ComponentFixture<AddEditAddingDelegatorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAddingDelegatorSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAddingDelegatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
