import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeLicenseProjectPartiesAdditionalTermsFormComponent } from './change-license-project-parties-additional-terms-form.component';

describe('ChangeLicenseProjectPartiesAdditionalTermsFormComponent', () => {
  let component: ChangeLicenseProjectPartiesAdditionalTermsFormComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectPartiesAdditionalTermsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeLicenseProjectPartiesAdditionalTermsFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ChangeLicenseProjectPartiesAdditionalTermsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
