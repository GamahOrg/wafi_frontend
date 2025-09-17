import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDesignPhaseCreditsComponent } from './add-edit-design-phase-credits.component';

describe('AddEditDesignPhaseCreditsComponent', () => {
  let component: AddEditDesignPhaseCreditsComponent;
  let fixture: ComponentFixture<AddEditDesignPhaseCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDesignPhaseCreditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDesignPhaseCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
