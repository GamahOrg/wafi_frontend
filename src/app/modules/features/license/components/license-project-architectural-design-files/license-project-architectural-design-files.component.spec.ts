import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectArchitecturalDesignFilesComponent } from './license-project-architectural-design-files.component';

describe('LicenseProjectArchitecturalDesignFilesComponent', () => {
  let component: LicenseProjectArchitecturalDesignFilesComponent;
  let fixture: ComponentFixture<LicenseProjectArchitecturalDesignFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectArchitecturalDesignFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectArchitecturalDesignFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
