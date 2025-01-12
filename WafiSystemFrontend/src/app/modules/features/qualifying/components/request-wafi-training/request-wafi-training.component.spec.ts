import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWafiTrainingComponent } from './request-wafi-training.component';

describe('RequestWafiTrainingComponent', () => {
  let component: RequestWafiTrainingComponent;
  let fixture: ComponentFixture<RequestWafiTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWafiTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestWafiTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
