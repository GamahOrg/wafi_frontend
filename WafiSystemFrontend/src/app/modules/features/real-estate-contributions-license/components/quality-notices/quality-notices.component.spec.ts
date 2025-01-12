import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityNoticesComponent } from './quality-notices.component';

describe('QualityNoticesComponent', () => {
  let component: QualityNoticesComponent;
  let fixture: ComponentFixture<QualityNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityNoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
