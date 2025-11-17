import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { BusinessPaymentTemplatesComponent } from './business-payment-templates.component';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

describe('BusinessPaymentTemplatesComponent', () => {
  let component: BusinessPaymentTemplatesComponent;
  let fixture: ComponentFixture<BusinessPaymentTemplatesComponent>;
  let licenseProjectBusinessPaymentService: jasmine.SpyObj<LicenseProjectBusinessPaymentService>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let popupService: jasmine.SpyObj<PopupService>;
  let sharedLicenseProjectService: jasmine.SpyObj<SharedLicenseProjectService>;

  beforeEach(async () => {
    const licenseProjectBusinessPaymentServiceSpy = jasmine.createSpyObj('LicenseProjectBusinessPaymentService', [
      'getLicenseProjectBusinessPaymentTemplates',
      'deleteLicenseProjectBusinessPayment'
    ]);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    const popupServiceSpy = jasmine.createSpyObj('PopupService', ['updatePopupData', 'cancelAction', 'confirmAction']);
    const sharedLicenseProjectServiceSpy = jasmine.createSpyObj('SharedLicenseProjectService', ['getLicenseProjectIdStorage']);

    await TestBed.configureTestingModule({
      declarations: [BusinessPaymentTemplatesComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: LicenseProjectBusinessPaymentService, useValue: licenseProjectBusinessPaymentServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
        { provide: PopupService, useValue: popupServiceSpy },
        { provide: SharedLicenseProjectService, useValue: sharedLicenseProjectServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessPaymentTemplatesComponent);
    component = fixture.componentInstance;
    licenseProjectBusinessPaymentService = TestBed.inject(LicenseProjectBusinessPaymentService) as jasmine.SpyObj<LicenseProjectBusinessPaymentService>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    popupService = TestBed.inject(PopupService) as jasmine.SpyObj<PopupService>;
    sharedLicenseProjectService = TestBed.inject(SharedLicenseProjectService) as jasmine.SpyObj<SharedLicenseProjectService>;

    // Setup default return values
    licenseProjectBusinessPaymentService.getLicenseProjectBusinessPaymentTemplates.and.returnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load templates on init', () => {
    component.ngOnInit();
    expect(licenseProjectBusinessPaymentService.getLicenseProjectBusinessPaymentTemplates).toHaveBeenCalled();
  });

  it('should handle template selection', () => {
    const mockTemplate = {
      id: '1',
      templateName: 'Test Template',
      licenseProjectBusinessPayment: {
        id: '1',
        templateName: 'Test Template',
        installments: []
      }
    };
    component.selectTemplate('1');
    expect(component.selectedTemplateId).toBe('1');
  });
});