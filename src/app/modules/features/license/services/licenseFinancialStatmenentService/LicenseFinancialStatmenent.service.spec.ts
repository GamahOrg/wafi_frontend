import { LicenseFinancialStatmenentService } from "./LicenseFinancialStatmenent.service";
import { TestBed } from "@angular/core/testing";

describe("LicenseFinancialStatmenentService", () => {

  let service: LicenseFinancialStatmenentService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LicenseFinancialStatmenentService
      ]
    });
    service = TestBed.get(LicenseFinancialStatmenentService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
