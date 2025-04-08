import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWithdrawSurplusBeforeProjectEndRequestComponent } from './add-edit-withdraw-surplus-before-project-end-request.component';

describe('AddEditWithdrawSurplusBeforeProjectEndRequestComponent', () => {
  let component: AddEditWithdrawSurplusBeforeProjectEndRequestComponent;
  let fixture: ComponentFixture<AddEditWithdrawSurplusBeforeProjectEndRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWithdrawSurplusBeforeProjectEndRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditWithdrawSurplusBeforeProjectEndRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
