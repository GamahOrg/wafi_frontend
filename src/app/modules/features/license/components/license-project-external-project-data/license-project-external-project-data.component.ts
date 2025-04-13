import { Component } from '@angular/core';
import { ExternalProjectDataDto } from '../../models/external-project-data-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectAdvertisingFormsElectronicFileDto } from '../../models/license-project-advertising-forms-electronic-file-dto';
import { LicenseProjectLicenseDocumentDto } from '../../models/license-project-license-document-dto';
import { LicenseProjectOwnershipApprovedDocumentDto } from '../../models/license-project-ownership-approved-document-dto';
import { LicenseProjectRightOfSaudisToOwnRealEstateFileDto } from '../../models/license-project-right-of-saudis-to-own-real-estate-file-dto';

@Component({
  selector: 'app-license-project-external-project-data',
  templateUrl: './license-project-external-project-data.component.html',
  styleUrls: ['./license-project-external-project-data.component.scss']
})
export class LicenseProjectExternalProjectDataComponent {
  externalProjectData!: ExternalProjectDataDto;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  financialGuaranteeOfProjectOwnershipFile!: SysFileManagerCreateUpdateDto;
  licenseProjectRightOfSaudisToOwnRealEstateFiles!: LicenseProjectRightOfSaudisToOwnRealEstateFileDto[];
  licenseProjectLicenseDocuments!: LicenseProjectLicenseDocumentDto[];
  licenseProjectOwnershipApprovedDocuments!: LicenseProjectOwnershipApprovedDocumentDto[];
  licenseProjectAdvertisingFormsElectronicFiles!: LicenseProjectAdvertisingFormsElectronicFileDto[];

  constructor(private _licenseDetailService: LicenseDetailsService) { }

  localization = {
    title: 'وثائق الطلب',
    LicenseProjectOwnershipApprovedDocument: 'وثائق ملكية المشروع معتمدة في بلد المشروع',
    LicenseProjectLicenseDocument: "صورة لترخيص المشروع من بلد المشروع",
    LicenseProjectAdvertisingFormsElectronicFile: "ملف إلكتروني لجميع نماذج الإعلان والمنشورات متوافقة مع الدليل الايضاحي المعتمد",
    RightOfSaudisToOwnRealEstateFile: "ملف بأحقية السعوديين بتملك العقارات في بلد المشروع",
    FinancialGuaranteeOfProjectOwnershipFile: "ملف ضمان مالي بقيمة ١٪ من القيمة الإجمالية للمشروع لمدة ثلاثة أشهر بعد تاريخ انتهاء الترخيص",
  };

  ngOnInit(): void {
    this.getAll();
    this.getFinancialGuaranteeOfProjectOwnershipFile();
  }

  getFinancialGuaranteeOfProjectOwnershipFile(): void {
    this.subscriptions.push(
      this._licenseDetailService.financialGuaranteeOfProjectOwnershipFile$.subscribe((res: SysFileManagerCreateUpdateDto | null) => {
        if (res) {
          this.financialGuaranteeOfProjectOwnershipFile = res
        }
      })
    )
  }

  getAll(): void {
    this.subscriptions.push(
      this._licenseDetailService.externalProjectData$.subscribe((res: ExternalProjectDataDto | null) => {
        if (res) {
          this.externalProjectData = res;
          if (res && res.licenseProjectRightOfSaudisToOwnRealEstateFiles.length) {
            this.licenseProjectRightOfSaudisToOwnRealEstateFiles = res.licenseProjectRightOfSaudisToOwnRealEstateFiles;
          }
          if (res && res.licenseProjectLicenseDocuments.length) {
            this.licenseProjectLicenseDocuments = res.licenseProjectLicenseDocuments;
          }
          if (res && res.licenseProjectOwnershipApprovedDocuments.length) {
            this.licenseProjectOwnershipApprovedDocuments = res.licenseProjectOwnershipApprovedDocuments;
          }
          if (res && res.licenseProjectAdvertisingFormsElectronicFiles.length) {
            this.licenseProjectAdvertisingFormsElectronicFiles = res.licenseProjectAdvertisingFormsElectronicFiles;
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
