import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQualityNoticesComponent } from './new-quality-notices.component';

describe('NewQualityNoticesComponent', () => {
  let component: NewQualityNoticesComponent;
  let fixture: ComponentFixture<NewQualityNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQualityNoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQualityNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
