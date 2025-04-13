import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExternalAddressComponent } from './project-external-address.component';

describe('ProjectExternalAddressComponent', () => {
  let component: ProjectExternalAddressComponent;
  let fixture: ComponentFixture<ProjectExternalAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExternalAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExternalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
