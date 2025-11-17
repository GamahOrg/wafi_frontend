import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantLicenseDeedsComponent } from './instant-license-deeds.component';

describe('InstantLicenseDeedsComponent', () => {
  let component: InstantLicenseDeedsComponent;
  let fixture: ComponentFixture<InstantLicenseDeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantLicenseDeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstantLicenseDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
