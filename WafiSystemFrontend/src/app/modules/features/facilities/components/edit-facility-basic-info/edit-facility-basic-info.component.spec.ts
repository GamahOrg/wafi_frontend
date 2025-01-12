import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacilityBasicInfoComponent } from './edit-facility-basic-info.component';

describe('EditFacilityBasicInfoComponent', () => {
  let component: EditFacilityBasicInfoComponent;
  let fixture: ComponentFixture<EditFacilityBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacilityBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFacilityBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
