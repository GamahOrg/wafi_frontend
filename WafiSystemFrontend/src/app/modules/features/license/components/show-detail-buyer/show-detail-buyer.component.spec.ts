import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailBuyerComponent } from './show-detail-buyer.component';

describe('ShowDetailBuyerComponent', () => {
  let component: ShowDetailBuyerComponent;
  let fixture: ComponentFixture<ShowDetailBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
