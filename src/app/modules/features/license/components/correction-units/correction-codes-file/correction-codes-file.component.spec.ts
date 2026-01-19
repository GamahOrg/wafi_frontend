import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionCodesFileComponent } from './correction-codes-file.component';

describe('CorrectionCodesFileComponent', () => {
  let component: CorrectionCodesFileComponent;
  let fixture: ComponentFixture<CorrectionCodesFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionCodesFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionCodesFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
