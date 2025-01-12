import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WafiTrainingFormComponent } from './wafi-training-form.component';

describe('WafiTrainingFormComponent', () => {
  let component: WafiTrainingFormComponent;
  let fixture: ComponentFixture<WafiTrainingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WafiTrainingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WafiTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
