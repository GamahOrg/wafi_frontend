import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LincenseDetailsComponent } from './lincense-details.component';

describe('LincenseDetailsComponent', () => {
  let component: LincenseDetailsComponent;
  let fixture: ComponentFixture<LincenseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LincenseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LincenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
