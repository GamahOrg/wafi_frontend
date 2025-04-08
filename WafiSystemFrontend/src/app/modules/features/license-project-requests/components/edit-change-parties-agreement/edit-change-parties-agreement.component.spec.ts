import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChangePartiesAgreementComponent } from './edit-change-parties-agreement.component';

describe('EditChangePartiesAgreementComponent', () => {
  let component: EditChangePartiesAgreementComponent;
  let fixture: ComponentFixture<EditChangePartiesAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChangePartiesAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChangePartiesAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
