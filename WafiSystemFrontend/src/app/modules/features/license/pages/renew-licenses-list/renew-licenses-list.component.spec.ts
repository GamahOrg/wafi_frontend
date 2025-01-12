import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewLicensesListComponent } from './renew-licenses-list.component';

describe('RenewLicensesListComponent', () => {
  let component: RenewLicensesListComponent;
  let fixture: ComponentFixture<RenewLicensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewLicensesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewLicensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
