import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectBankingAccountComponent } from './license-project-banking-account.component';

describe('LicenseProjectBankingAccountComponent', () => {
  let component: LicenseProjectBankingAccountComponent;
  let fixture: ComponentFixture<LicenseProjectBankingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectBankingAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectBankingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
