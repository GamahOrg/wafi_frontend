import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConnectionWithServicesProviderComponent } from './add-edit-connection-with-services-provider.component';

describe('AddEditConnectionWithServicesProviderComponent', () => {
  let component: AddEditConnectionWithServicesProviderComponent;
  let fixture: ComponentFixture<AddEditConnectionWithServicesProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConnectionWithServicesProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditConnectionWithServicesProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
