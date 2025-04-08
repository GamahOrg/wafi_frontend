import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeLicenseProjectSpaceOrUnitsRequestComponent } from './create-change-license-project-space-or-units-request.component';

describe('CreateChangeLicenseProjectSpaceOrUnitsRequestComponent', () => {
  let component: CreateChangeLicenseProjectSpaceOrUnitsRequestComponent;
  let fixture: ComponentFixture<CreateChangeLicenseProjectSpaceOrUnitsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangeLicenseProjectSpaceOrUnitsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangeLicenseProjectSpaceOrUnitsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
