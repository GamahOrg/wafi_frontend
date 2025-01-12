import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQualityNoticesComponent } from './previous-quality-notices.component';

describe('PreviousQualityNoticesComponent', () => {
  let component: PreviousQualityNoticesComponent;
  let fixture: ComponentFixture<PreviousQualityNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousQualityNoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousQualityNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
