import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNationalAddressesComponent } from './request-national-addresses.component';

describe('RequestNationalAddressesComponent', () => {
  let component: RequestNationalAddressesComponent;
  let fixture: ComponentFixture<RequestNationalAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNationalAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNationalAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
