import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBasicInfoComponent } from './facility-basic-info.component';

describe('FacilityBasicInfoComponent', () => {
  let component: FacilityBasicInfoComponent;
  let fixture: ComponentFixture<FacilityBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
