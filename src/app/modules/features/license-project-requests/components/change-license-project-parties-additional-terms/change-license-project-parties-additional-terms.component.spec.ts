import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeLicenseProjectPartiesAdditionalTermsComponent } from './change-license-project-parties-additional-terms.component';

describe('ChangeLicenseProjectPartiesAdditionalTermsComponent', () => {
  let component: ChangeLicenseProjectPartiesAdditionalTermsComponent;
  let fixture: ComponentFixture<ChangeLicenseProjectPartiesAdditionalTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeLicenseProjectPartiesAdditionalTermsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ChangeLicenseProjectPartiesAdditionalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
