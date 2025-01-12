import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectExchangeDocumentListComponent } from './license-project-exchange-document-list.component';

describe('LicenseProjectExchangeDocumentListComponent', () => {
  let component: LicenseProjectExchangeDocumentListComponent;
  let fixture: ComponentFixture<LicenseProjectExchangeDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectExchangeDocumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectExchangeDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
