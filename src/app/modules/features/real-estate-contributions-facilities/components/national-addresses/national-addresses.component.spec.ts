import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalAddressesComponent } from './national-addresses.component';

describe('NationalAddressesComponent', () => {
  let component: NationalAddressesComponent;
  let fixture: ComponentFixture<NationalAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalAddressesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
