import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCommercialRegisterNumberComponent } from './adding-commercial-register-number.component';

describe('AddingCommercialRegisterNumberComponent', () => {
  let component: AddingCommercialRegisterNumberComponent;
  let fixture: ComponentFixture<AddingCommercialRegisterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingCommercialRegisterNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingCommercialRegisterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
