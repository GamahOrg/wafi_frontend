import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesFileComponent } from './codes-file.component';

describe('CodesFileComponent', () => {
  let component: CodesFileComponent;
  let fixture: ComponentFixture<CodesFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
