import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActualQualityControlDetailsComponent } from './show-actual-quality-control-details.component';

describe('ShowActualQualityControlDetailsComponent', () => {
  let component: ShowActualQualityControlDetailsComponent;
  let fixture: ComponentFixture<ShowActualQualityControlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActualQualityControlDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActualQualityControlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
