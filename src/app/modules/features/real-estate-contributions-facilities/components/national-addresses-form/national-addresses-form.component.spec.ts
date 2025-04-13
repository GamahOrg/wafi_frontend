import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalAddressesFormComponent } from './national-addresses-form.component';

describe('NationalAddressesFormComponent', () => {
  let component: NationalAddressesFormComponent;
  let fixture: ComponentFixture<NationalAddressesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalAddressesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalAddressesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
