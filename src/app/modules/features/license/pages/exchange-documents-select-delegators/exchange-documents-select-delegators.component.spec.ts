import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDocumentsSelectDelegatorsComponent } from './exchange-documents-select-delegators.component';

describe('ExchangeDocumentsSelectDelegatorsComponent', () => {
  let component: ExchangeDocumentsSelectDelegatorsComponent;
  let fixture: ComponentFixture<ExchangeDocumentsSelectDelegatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeDocumentsSelectDelegatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeDocumentsSelectDelegatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
