import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateDeveloperDataComponent } from './real-estate-developer-data.component';

describe('RealEstateDeveloperDataComponent', () => {
  let component: RealEstateDeveloperDataComponent;
  let fixture: ComponentFixture<RealEstateDeveloperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateDeveloperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateDeveloperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
