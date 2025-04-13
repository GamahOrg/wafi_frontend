import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotLaunchHintComponent } from './pilot-launch-hint.component';

describe('PilotLaunchHintComponent', () => {
  let component: PilotLaunchHintComponent;
  let fixture: ComponentFixture<PilotLaunchHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotLaunchHintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotLaunchHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
