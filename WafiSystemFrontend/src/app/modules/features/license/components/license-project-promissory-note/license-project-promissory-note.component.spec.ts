import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectPromissoryNoteComponent } from './license-project-promissory-note.component';

describe('LicenseProjectPromissoryNoteComponent', () => {
  let component: LicenseProjectPromissoryNoteComponent;
  let fixture: ComponentFixture<LicenseProjectPromissoryNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectPromissoryNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectPromissoryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
