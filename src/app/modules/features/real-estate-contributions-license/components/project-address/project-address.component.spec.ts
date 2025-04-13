import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddressComponent } from './project-address.component';

describe('ProjectAddressComponent', () => {
  let component: ProjectAddressComponent;
  let fixture: ComponentFixture<ProjectAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
