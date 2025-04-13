import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailExchangeDocumentComponent } from './show-detail-exchange-document.component';

describe('ShowDetailExchangeDocumentComponent', () => {
  let component: ShowDetailExchangeDocumentComponent;
  let fixture: ComponentFixture<ShowDetailExchangeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailExchangeDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailExchangeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
