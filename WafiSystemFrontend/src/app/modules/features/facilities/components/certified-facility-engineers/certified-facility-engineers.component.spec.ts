import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedFacilityEngineersComponent } from './certified-facility-engineers.component';

describe('CertifiedFacilityEngineersComponent', () => {
  let component: CertifiedFacilityEngineersComponent;
  let fixture: ComponentFixture<CertifiedFacilityEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedFacilityEngineersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedFacilityEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
