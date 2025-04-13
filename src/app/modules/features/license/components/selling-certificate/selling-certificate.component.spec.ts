import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingCertificateComponent } from './selling-certificate.component';

describe('SellingCertificateComponent', () => {
  let component: SellingCertificateComponent;
  let fixture: ComponentFixture<SellingCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
