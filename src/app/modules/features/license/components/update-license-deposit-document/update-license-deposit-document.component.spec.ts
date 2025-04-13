import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLicenseDepositDocumentComponent } from './update-license-deposit-document.component';

describe('UpdateLicenseDepositDocumentComponent', () => {
  let component: UpdateLicenseDepositDocumentComponent;
  let fixture: ComponentFixture<UpdateLicenseDepositDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLicenseDepositDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLicenseDepositDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
