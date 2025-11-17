import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffPlanSaleLicenseComponent } from './off-plan-sale-license.component';

describe('OffPlanSaleLicenseComponent', () => {
  let component: OffPlanSaleLicenseComponent;
  let fixture: ComponentFixture<OffPlanSaleLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffPlanSaleLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffPlanSaleLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
