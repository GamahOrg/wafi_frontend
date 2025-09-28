import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualQualityControlDetailsComponent } from './actual-quality-control-details.component';

describe('ActualQualityControlDetailsComponent', () => {
  let component: ActualQualityControlDetailsComponent;
  let fixture: ComponentFixture<ActualQualityControlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualQualityControlDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualQualityControlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
