import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRemovingDelegatorSummaryComponent } from './add-edit-removing-delegator-summary.component';

describe('AddEditRemovingDelegatorSummaryComponent', () => {
  let component: AddEditRemovingDelegatorSummaryComponent;
  let fixture: ComponentFixture<AddEditRemovingDelegatorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRemovingDelegatorSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRemovingDelegatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
