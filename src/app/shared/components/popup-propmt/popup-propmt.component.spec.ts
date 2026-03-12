import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPropmtComponent } from './popup-propmt.component';

describe('PopupPropmtComponent', () => {
  let component: PopupPropmtComponent;
  let fixture: ComponentFixture<PopupPropmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPropmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPropmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
