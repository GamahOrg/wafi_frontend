import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalServiceFormComponent } from './additional-service-form.component';

describe('AdditionalServiceFormComponent', () => {
  let component: AdditionalServiceFormComponent;
  let fixture: ComponentFixture<AdditionalServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalServiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
