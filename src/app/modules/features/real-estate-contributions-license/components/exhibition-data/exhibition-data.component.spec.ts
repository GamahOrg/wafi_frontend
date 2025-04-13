import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionDataComponent } from './exhibition-data.component';

describe('ExhibitionDataComponent', () => {
  let component: ExhibitionDataComponent;
  let fixture: ComponentFixture<ExhibitionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
