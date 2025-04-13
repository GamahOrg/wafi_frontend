import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectBuyerListComponent } from './license-project-buyer-list.component';

describe('LicenseProjectBuyerListComponent', () => {
  let component: LicenseProjectBuyerListComponent;
  let fixture: ComponentFixture<LicenseProjectBuyerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectBuyerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectBuyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
