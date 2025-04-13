import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReplayFromProjectMangerComponent } from './add-replay-from-project-manger.component';

describe('AddReplayFromProjectMangerComponent', () => {
  let component: AddReplayFromProjectMangerComponent;
  let fixture: ComponentFixture<AddReplayFromProjectMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReplayFromProjectMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReplayFromProjectMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
