import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDocumentationListComponent } from './contract-documentation-list.component';

describe('ContractDocumentationListComponent', () => {
  let component: ContractDocumentationListComponent;
  let fixture: ComponentFixture<ContractDocumentationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractDocumentationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractDocumentationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
