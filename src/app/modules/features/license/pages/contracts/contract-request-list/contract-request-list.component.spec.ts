import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractRequestListComponent } from './contract-request-list.component';

describe('ContractRequestListComponent', () => {
  let component: ContractRequestListComponent;
  let fixture: ComponentFixture<ContractRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
