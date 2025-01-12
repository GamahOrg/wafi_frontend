import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionLicensesComponent } from './construction-licenses.component';

describe('ConstructionLicensesComponent', () => {
  let component: ConstructionLicensesComponent;
  let fixture: ComponentFixture<ConstructionLicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionLicensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
