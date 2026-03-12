import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerApprovalDetailsComponent } from './engineer-approval-details.component';

describe('EngineerApprovalDetailsComponent', () => {
  let component: EngineerApprovalDetailsComponent;
  let fixture: ComponentFixture<EngineerApprovalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerApprovalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
