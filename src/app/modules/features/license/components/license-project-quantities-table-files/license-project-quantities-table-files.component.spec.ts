import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectQuantitiesTableFilesComponent } from './license-project-quantities-table-files.component';

describe('LicenseProjectQuantitiesTableFilesComponent', () => {
  let component: LicenseProjectQuantitiesTableFilesComponent;
  let fixture: ComponentFixture<LicenseProjectQuantitiesTableFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectQuantitiesTableFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectQuantitiesTableFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
