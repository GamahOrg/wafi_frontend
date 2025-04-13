import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent } from './add-or-edite-real-estate-developer-cahnge-plane-request.component';

describe('AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent', () => {
  let component: AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent;
  let fixture: ComponentFixture<AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditeRealEstateDeveloperCahngePlaneRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
