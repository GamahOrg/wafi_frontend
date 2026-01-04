import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawriaLicenseBankAccountInfoComponent } from './fawria-license-bank-account-info.component';

describe('FawriaLicenseBankAccountInfoComponent', () => {
  let component: FawriaLicenseBankAccountInfoComponent;
  let fixture: ComponentFixture<FawriaLicenseBankAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawriaLicenseBankAccountInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawriaLicenseBankAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
