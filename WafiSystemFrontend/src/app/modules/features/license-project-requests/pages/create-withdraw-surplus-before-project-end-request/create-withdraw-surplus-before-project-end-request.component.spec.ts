import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWithdrawSurplusBeforeProjectEndRequestComponent } from './create-withdraw-surplus-before-project-end-request.component';

describe('CreateWithdrawSurplusBeforeProjectEndRequestComponent', () => {
  let component: CreateWithdrawSurplusBeforeProjectEndRequestComponent;
  let fixture: ComponentFixture<CreateWithdrawSurplusBeforeProjectEndRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWithdrawSurplusBeforeProjectEndRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWithdrawSurplusBeforeProjectEndRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
