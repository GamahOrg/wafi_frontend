import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActualInfrastructureNetworksStatusComponent } from './add-edit-actual-infrastructure-networks-status.component';

describe('AddEditActualInfrastructureNetworksStatusComponent', () => {
  let component: AddEditActualInfrastructureNetworksStatusComponent;
  let fixture: ComponentFixture<AddEditActualInfrastructureNetworksStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActualInfrastructureNetworksStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditActualInfrastructureNetworksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
