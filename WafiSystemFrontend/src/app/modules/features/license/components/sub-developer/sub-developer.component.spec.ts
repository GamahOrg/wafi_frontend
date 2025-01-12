import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDeveloperComponent } from './sub-developer.component';

describe('SubDeveloperComponent', () => {
  let component: SubDeveloperComponent;
  let fixture: ComponentFixture<SubDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
