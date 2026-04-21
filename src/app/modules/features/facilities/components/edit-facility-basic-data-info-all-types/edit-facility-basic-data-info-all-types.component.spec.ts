import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilityBasicDataInfoAllTypesComponent } from './edit-facility-basic-data-info-all-types.component';

describe('EditFacilityBasicDataInfoAllTypesComponent', () => {
  let component: EditFacilityBasicDataInfoAllTypesComponent;
  let fixture: ComponentFixture<EditFacilityBasicDataInfoAllTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacilityBasicDataInfoAllTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFacilityBasicDataInfoAllTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
