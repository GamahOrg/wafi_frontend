import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationUsernameComponent } from './verification-username.component';

describe('VerificationUsernameComponent', () => {
  let component: VerificationUsernameComponent;
  let fixture: ComponentFixture<VerificationUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
