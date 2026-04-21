import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBasicDataInfoAllTypesComponent } from './facility-basic-data-info-all-types.component';

describe('FacilityBasicDataInfoAllTypesComponent', () => {
  let component: FacilityBasicDataInfoAllTypesComponent;
  let fixture: ComponentFixture<FacilityBasicDataInfoAllTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityBasicDataInfoAllTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityBasicDataInfoAllTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
