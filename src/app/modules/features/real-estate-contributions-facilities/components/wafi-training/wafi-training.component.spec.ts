import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WafiTrainingComponent } from './wafi-training.component';

describe('WafiTrainingComponent', () => {
  let component: WafiTrainingComponent;
  let fixture: ComponentFixture<WafiTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WafiTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WafiTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
