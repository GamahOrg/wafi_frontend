import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePartiesAgreementRequestDetailsComponent } from './change-parties-agreement-request-details.component';

describe('ChangePartiesAgreementRequestDetailsComponent', () => {
  let component: ChangePartiesAgreementRequestDetailsComponent;
  let fixture: ComponentFixture<ChangePartiesAgreementRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePartiesAgreementRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePartiesAgreementRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
