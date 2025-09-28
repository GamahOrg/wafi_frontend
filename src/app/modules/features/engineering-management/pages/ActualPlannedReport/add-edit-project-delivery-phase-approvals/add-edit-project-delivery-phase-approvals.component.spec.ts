import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectDeliveryPhaseApprovalsComponent } from './add-edit-project-delivery-phase-approvals.component';

describe('AddEditProjectDeliveryPhaseApprovalsComponent', () => {
  let component: AddEditProjectDeliveryPhaseApprovalsComponent;
  let fixture: ComponentFixture<AddEditProjectDeliveryPhaseApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProjectDeliveryPhaseApprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProjectDeliveryPhaseApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
