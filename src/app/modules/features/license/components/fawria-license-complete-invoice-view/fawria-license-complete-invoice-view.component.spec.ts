import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawriaLicenseCompleteInvoiceViewComponent } from './fawria-license-complete-invoice-view.component';

describe('FawriaLicenseCompleteInvoiceViewComponent', () => {
  let component: FawriaLicenseCompleteInvoiceViewComponent;
  let fixture: ComponentFixture<FawriaLicenseCompleteInvoiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawriaLicenseCompleteInvoiceViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawriaLicenseCompleteInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
