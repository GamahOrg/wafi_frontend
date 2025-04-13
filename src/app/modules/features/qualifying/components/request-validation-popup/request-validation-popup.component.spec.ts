import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestValidationPopupComponent } from './request-validation-popup.component';

describe('RequestValidationPopupComponent', () => {
  let component: RequestValidationPopupComponent;
  let fixture: ComponentFixture<RequestValidationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestValidationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestValidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
