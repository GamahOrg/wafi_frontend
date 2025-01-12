import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCertifiedFacilityEngineersComponent } from './request-certified-facility-engineers.component';

describe('RequestCertifiedFacilityEngineersComponent', () => {
  let component: RequestCertifiedFacilityEngineersComponent;
  let fixture: ComponentFixture<RequestCertifiedFacilityEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCertifiedFacilityEngineersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCertifiedFacilityEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
