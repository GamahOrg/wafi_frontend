import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAndBusinessProgressComponent } from './quality-and-business-progress.component';

describe('QualityAndBusinessProgressComponent', () => {
  let component: QualityAndBusinessProgressComponent;
  let fixture: ComponentFixture<QualityAndBusinessProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAndBusinessProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAndBusinessProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
