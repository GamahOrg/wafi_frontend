import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContributionDataComponent } from './main-contribution-data.component';

describe('MainContributionDataComponent', () => {
  let component: MainContributionDataComponent;
  let fixture: ComponentFixture<MainContributionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContributionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContributionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
