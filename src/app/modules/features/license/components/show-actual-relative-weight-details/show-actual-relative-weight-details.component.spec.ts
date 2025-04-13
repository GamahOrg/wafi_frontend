import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActualRelativeWeightDetailsComponent } from './show-actual-relative-weight-details.component';

describe('ShowActualRelativeWeightDetailsComponent', () => {
  let component: ShowActualRelativeWeightDetailsComponent;
  let fixture: ComponentFixture<ShowActualRelativeWeightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActualRelativeWeightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActualRelativeWeightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
