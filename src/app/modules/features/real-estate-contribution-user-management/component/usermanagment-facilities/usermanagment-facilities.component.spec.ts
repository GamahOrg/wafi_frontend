import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagmentFacilitiesComponent } from './usermanagment-facilities.component';

describe('UsermanagmentFacilitiesComponent', () => {
  let component: UsermanagmentFacilitiesComponent;
  let fixture: ComponentFixture<UsermanagmentFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagmentFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagmentFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
