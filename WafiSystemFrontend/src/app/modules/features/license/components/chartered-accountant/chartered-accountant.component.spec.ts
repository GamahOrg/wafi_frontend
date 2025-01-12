import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteredAccountantComponent } from './chartered-accountant.component';

describe('CharteredAccountantComponent', () => {
  let component: CharteredAccountantComponent;
  let fixture: ComponentFixture<CharteredAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharteredAccountantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharteredAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
