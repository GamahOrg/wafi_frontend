import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialCertificateComponent } from './initial-certificate.component';

describe('InitialCertificateComponent', () => {
  let component: InitialCertificateComponent;
  let fixture: ComponentFixture<InitialCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
