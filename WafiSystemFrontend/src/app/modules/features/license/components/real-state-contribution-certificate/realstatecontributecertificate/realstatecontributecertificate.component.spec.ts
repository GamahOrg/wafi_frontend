import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstatecontributecertificateComponent } from './realstatecontributecertificate.component';

describe('RealstatecontributecertificateComponent', () => {
  let component: RealstatecontributecertificateComponent;
  let fixture: ComponentFixture<RealstatecontributecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealstatecontributecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealstatecontributecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
