import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LicenseProjectFinancialStatementListComponent } from "./LicenseProjectFinancialStatementList.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LicenseProjectFinancialStatementListComponent", () => {

  let fixture: ComponentFixture<LicenseProjectFinancialStatementListComponent>;
  let component: LicenseProjectFinancialStatementListComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LicenseProjectFinancialStatementListComponent]
    });

    fixture = TestBed.createComponent(LicenseProjectFinancialStatementListComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
