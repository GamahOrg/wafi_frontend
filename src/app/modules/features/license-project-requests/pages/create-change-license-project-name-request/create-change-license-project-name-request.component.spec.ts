import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeLicenseProjectNameRequestComponent } from './create-change-license-project-name-request.component';

describe('CreateChangeLicenseProjectNameRequestComponent', () => {
  let component: CreateChangeLicenseProjectNameRequestComponent;
  let fixture: ComponentFixture<CreateChangeLicenseProjectNameRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangeLicenseProjectNameRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangeLicenseProjectNameRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
