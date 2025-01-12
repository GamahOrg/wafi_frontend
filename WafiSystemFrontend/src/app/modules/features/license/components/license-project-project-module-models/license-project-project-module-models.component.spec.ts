import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectProjectModuleModelsComponent } from './license-project-project-module-models.component';

describe('LicenseProjectProjectModuleModelsComponent', () => {
  let component: LicenseProjectProjectModuleModelsComponent;
  let fixture: ComponentFixture<LicenseProjectProjectModuleModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectProjectModuleModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectProjectModuleModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
