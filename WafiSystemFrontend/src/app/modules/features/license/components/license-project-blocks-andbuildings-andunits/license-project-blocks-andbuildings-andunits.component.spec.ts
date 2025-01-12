import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProjectBlocksAndbuildingsAndunitsComponent } from './license-project-blocks-andbuildings-andunits.component';

describe('LicenseProjectBlocksAndbuildingsAndunitsComponent', () => {
  let component: LicenseProjectBlocksAndbuildingsAndunitsComponent;
  let fixture: ComponentFixture<LicenseProjectBlocksAndbuildingsAndunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseProjectBlocksAndbuildingsAndunitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseProjectBlocksAndbuildingsAndunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
