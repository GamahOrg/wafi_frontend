import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePartiesAgreementDetailsComponent } from './change-parties-agreement-details.component';

describe('ChangePartiesAgreementDetailsComponent', () => {
  let component: ChangePartiesAgreementDetailsComponent;
  let fixture: ComponentFixture<ChangePartiesAgreementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePartiesAgreementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePartiesAgreementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
