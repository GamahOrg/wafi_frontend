import { Component } from '@angular/core';
import { ProjectDocumentDataDto } from '../../models/external-project-data-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectRightOfSaudisToOwnRealEstateFileDto } from '../../models/license-project-right-of-saudis-to-own-real-estate-file-dto';
import { LicenseProjectLicenseDocumentDto } from '../../models/license-project-license-document-dto';
import { LicenseProjectOwnershipApprovedDocumentDto } from '../../models/license-project-ownership-approved-document-dto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-document-data',
  templateUrl: './license-project-document-data.component.html',
  styleUrls: ['./license-project-document-data.component.scss']
})
export class LicenseProjectDocumentDataComponent {
  projectDocumentData!: ProjectDocumentDataDto;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  licenseProjectRightOfSaudisToOwnRealEstateFiles!: LicenseProjectRightOfSaudisToOwnRealEstateFileDto[];
  licenseProjectLicenseDocuments!: LicenseProjectLicenseDocumentDto[];
  licenseProjectOwnershipApprovedDocuments!: LicenseProjectOwnershipApprovedDocumentDto[];

  constructor(private _licenseDetailService: LicenseDetailsService) {

  }
  localization = {
    title: 'وثائق المشروع',
    LicenseProjectOwnershipApprovedDocument: 'وثائق ملكية المشروع معتمدة في بلد المشروع',
    LicenseProjectLicenseDocument: "صورة لترخيص المشروع من بلد المشروع",
    RightOfSaudisToOwnRealEstateFile: "ملف بأحقية السعوديين بتملك العقارات في بلد المشروع",

  };
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subscriptions.push(
      this._licenseDetailService.projectDocumentData$.subscribe((res: ProjectDocumentDataDto | null) => {
        if (res) {
          this.projectDocumentData = res;
          if (res && res.licenseProjectRightOfSaudisToOwnRealEstateFiles.length) {
            this.licenseProjectRightOfSaudisToOwnRealEstateFiles = res.licenseProjectRightOfSaudisToOwnRealEstateFiles;
          }
          if (res && res.licenseProjectLicenseDocuments.length) {
            this.licenseProjectLicenseDocuments = res.licenseProjectLicenseDocuments;
          }
          if (res && res.licenseProjectOwnershipApprovedDocuments.length) {
            this.licenseProjectOwnershipApprovedDocuments = res.licenseProjectOwnershipApprovedDocuments;
          }

        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
