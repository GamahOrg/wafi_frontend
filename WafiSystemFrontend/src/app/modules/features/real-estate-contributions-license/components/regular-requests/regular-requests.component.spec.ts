import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularRequestsComponent } from './regular-requests.component';

describe('RegularRequestsComponent', () => {
  let component: RegularRequestsComponent;
  let fixture: ComponentFixture<RegularRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
