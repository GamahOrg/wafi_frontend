import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateCharteredAccountantUnitsListComponent } from './real-state-chartered-accountant-units-list.component';

describe('RealStateCharteredAccountantUnitsListComponent', () => {
  let component: RealStateCharteredAccountantUnitsListComponent;
  let fixture: ComponentFixture<RealStateCharteredAccountantUnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateCharteredAccountantUnitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealStateCharteredAccountantUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
