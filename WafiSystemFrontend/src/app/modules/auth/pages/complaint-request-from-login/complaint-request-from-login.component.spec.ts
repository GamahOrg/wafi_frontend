import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintRequestFromLoginComponent } from './complaint-request-from-login.component';

describe('ComplaintRequestFromLoginComponent', () => {
  let component: ComplaintRequestFromLoginComponent;
  let fixture: ComponentFixture<ComplaintRequestFromLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintRequestFromLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintRequestFromLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
