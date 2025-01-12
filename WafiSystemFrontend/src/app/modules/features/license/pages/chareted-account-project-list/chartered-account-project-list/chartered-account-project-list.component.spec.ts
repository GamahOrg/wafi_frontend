import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteredAccountProjectListComponent } from './chartered-account-project-list.component';

describe('CharteredAccountProjectListComponent', () => {
  let component: CharteredAccountProjectListComponent;
  let fixture: ComponentFixture<CharteredAccountProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharteredAccountProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharteredAccountProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
