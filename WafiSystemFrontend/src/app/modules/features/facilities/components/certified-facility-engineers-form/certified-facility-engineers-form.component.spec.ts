import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedFacilityEngineersFormComponent } from './certified-facility-engineers-form.component';

describe('CertifiedFacilityEngineersFormComponent', () => {
  let component: CertifiedFacilityEngineersFormComponent;
  let fixture: ComponentFixture<CertifiedFacilityEngineersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedFacilityEngineersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedFacilityEngineersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
