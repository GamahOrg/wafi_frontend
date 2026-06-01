import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangeLicenseProjectAccountantRequestComponent } from './create-change-license-project-accountant-request.component';

describe('CreateChangeLicenseProjectAccountantRequestComponent', () => {
  let component: CreateChangeLicenseProjectAccountantRequestComponent;
  let fixture: ComponentFixture<CreateChangeLicenseProjectAccountantRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateChangeLicenseProjectAccountantRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CreateChangeLicenseProjectAccountantRequestComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
