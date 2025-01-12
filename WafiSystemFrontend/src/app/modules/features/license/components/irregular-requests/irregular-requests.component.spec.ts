import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularRequestsComponent } from './irregular-requests.component';

describe('IrregularRequestsComponent', () => {
  let component: IrregularRequestsComponent;
  let fixture: ComponentFixture<IrregularRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrregularRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrregularRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
