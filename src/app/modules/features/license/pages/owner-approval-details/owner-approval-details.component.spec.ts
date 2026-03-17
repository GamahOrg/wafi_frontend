import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerApprovalDetailsComponent } from './owner-approval-details.component';

describe('OwnerApprovalDetailsComponent', () => {
  let component: OwnerApprovalDetailsComponent;
  let fixture: ComponentFixture<OwnerApprovalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerApprovalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
