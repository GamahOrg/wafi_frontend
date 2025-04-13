import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectDocumentDataComponent } from './license-project-document-data.component';

describe('LicenseProjectDocumentDataComponent', () => {
  let component: LicenseProjectDocumentDataComponent;
  let fixture: ComponentFixture<LicenseProjectDocumentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectDocumentDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectDocumentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
