import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealEstateDeveloperComponent } from './update-real-estate-developer.component';

describe('UpdateRealEstateDeveloperComponent', () => {
  let component: UpdateRealEstateDeveloperComponent;
  let fixture: ComponentFixture<UpdateRealEstateDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRealEstateDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRealEstateDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
