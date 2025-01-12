import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseRequestCharteredAccountantComponent } from './license-request-chartered-accountant.component';

describe('LicenseRequestCharteredAccountantComponent', () => {
  let component: LicenseRequestCharteredAccountantComponent;
  let fixture: ComponentFixture<LicenseRequestCharteredAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseRequestCharteredAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseRequestCharteredAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
