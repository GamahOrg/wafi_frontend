import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDesignPhaseCreditsComponent } from './show-design-phase-credits.component';

describe('ShowDesignPhaseCreditsComponent', () => {
  let component: ShowDesignPhaseCreditsComponent;
  let fixture: ComponentFixture<ShowDesignPhaseCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDesignPhaseCreditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDesignPhaseCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
