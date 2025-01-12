import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationRequestListComponent } from './qualification-request-list.component';

describe('QualififcationRequestListComponent', () => {
  let component: QualificationRequestListComponent;
  let fixture: ComponentFixture<QualificationRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
