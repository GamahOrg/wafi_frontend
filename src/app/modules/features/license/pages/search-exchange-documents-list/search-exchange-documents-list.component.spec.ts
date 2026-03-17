import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExchangeDocumentsListComponent } from './search-exchange-documents-list.component';

describe('SearchExchangeDocumentsListComponent', () => {
  let component: SearchExchangeDocumentsListComponent;
  let fixture: ComponentFixture<SearchExchangeDocumentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchExchangeDocumentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchExchangeDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
