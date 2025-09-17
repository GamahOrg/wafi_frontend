import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedEngineerProjectDetailsComponent } from './planned-engineer-project-details.component';

describe('PlannedEngineerProjectDetailsComponent', () => {
  let component: PlannedEngineerProjectDetailsComponent;
  let fixture: ComponentFixture<PlannedEngineerProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedEngineerProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedEngineerProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
