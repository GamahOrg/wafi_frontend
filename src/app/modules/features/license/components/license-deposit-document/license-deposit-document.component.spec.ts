import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDepositDocumentComponent } from './license-deposit-document.component';

describe('LicenseDepositDocumentComponent', () => {
  let component: LicenseDepositDocumentComponent;
  let fixture: ComponentFixture<LicenseDepositDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseDepositDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseDepositDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
