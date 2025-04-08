import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChangePartiesAgreementRequestComponent } from './create-change-parties-agreement-request.component';

describe('CreateChangePartiesAgreementRequestComponent', () => {
  let component: CreateChangePartiesAgreementRequestComponent;
  let fixture: ComponentFixture<CreateChangePartiesAgreementRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChangePartiesAgreementRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChangePartiesAgreementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
