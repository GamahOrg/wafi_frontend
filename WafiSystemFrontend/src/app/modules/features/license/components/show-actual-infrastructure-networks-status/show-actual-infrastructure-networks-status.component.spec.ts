import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActualInfrastructureNetworksStatusComponent } from './show-actual-infrastructure-networks-status.component';

describe('ShowActualInfrastructureNetworksStatusComponent', () => {
  let component: ShowActualInfrastructureNetworksStatusComponent;
  let fixture: ComponentFixture<ShowActualInfrastructureNetworksStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActualInfrastructureNetworksStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActualInfrastructureNetworksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
