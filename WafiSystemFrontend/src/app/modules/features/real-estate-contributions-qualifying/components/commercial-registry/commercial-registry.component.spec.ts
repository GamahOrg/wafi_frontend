import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialRegistryComponent } from './commercial-registry.component';

describe('CommercialRegistryComponent', () => {
  let component: CommercialRegistryComponent;
  let fixture: ComponentFixture<CommercialRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
