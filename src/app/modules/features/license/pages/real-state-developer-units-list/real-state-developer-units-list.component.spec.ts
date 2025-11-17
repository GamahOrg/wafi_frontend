import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateDeveloperUnitsListComponent } from './real-state-developer-units-list.component';

describe('RealStateDeveloperUnitsListComponent', () => {
  let component: RealStateDeveloperUnitsListComponent;
  let fixture: ComponentFixture<RealStateDeveloperUnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateDeveloperUnitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealStateDeveloperUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
