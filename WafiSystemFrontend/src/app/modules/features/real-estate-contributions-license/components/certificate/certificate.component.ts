import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CertificateTemplate, LicenseCertificateDto, certificateData } from '../../models/license-certification.model';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-real-estate-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class RealStateCertificateComponent {
  @Input() className?: string;
  @Input() certificateData!: LicenseCertificateDto;
  certificateTemplateDate: CertificateTemplate | null = null;
  fieldsCertificateData: certificateData[] = [];
  title: string = '';
  constructor() { }

  ngOnInit(): void {
    this.buildCertificate();   
  }

  buildCertificates() {
    this.certificateTemplateDate = this.getRealEstateShareholdingLicenseTemplate();
  }

  private buildCertificate() {
    switch (this.certificateData.licenseRequestTypeTypeCode) {
      // رخصة المساهمة
      case LicenseRequestTypeTypeCodeEnum.RealEstateShareholdingLicense: {
        this.title="تمنح الهيئة العامة للعقار بموجب هذه الوثيقة رخصة المساهمات العقارية";
        this.fieldsCertificateData = [
          { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.facilityName },
          { englishTitle: 'License Type', arabicTitle: 'نوع الرخصة', value: this.certificateData.licenseRequestTypeName },
          { englishTitle: 'Contribution Name ', arabicTitle: 'اسم المساهمة', value: this.certificateData.contributionName },
          // { englishTitle: 'Contribution Type Name ', arabicTitle: 'نوع المساهمة', value: this.certificateData.contributionTypeName },
          { englishTitle: 'Contribution Capital Value ', arabicTitle: 'رأس مال المساهمة', value: this.certificateData.contributionCapitalValue },
          { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData.projectAreaName + ' / ' + this.certificateData.projectCityName },

        ] as certificateData[];
      }
        break;
        //باقى الرخص
      default: {
        this.title=" تمنح الهيئة العامة للعقار بموجب هذه الوثيقة" + this.certificateData.licenseRequestTypeName;
        this.fieldsCertificateData = [
          { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.facilityName },
          { englishTitle: 'License Type', arabicTitle: 'نوع الرخصة', value: this.certificateData.licenseRequestTypeName },
          { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
          { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
          { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData.projectAreaName + ' / ' + this.certificateData.projectCityName },

        ] as certificateData[];
        break;
      }
    }


  }
  private getRealEstateShareholdingLicenseTemplate() {
    return {
      // arabicTitle: 'ترخيـص البيــع علــى الخـارطة',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'Real estate contribution license',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value:  this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        
        { englishTitle: 'Contribution Name ', arabicTitle: 'اسم المساهمة', value: this.certificateData.contributionName },
        { englishTitle: 'Contribution Type Name ', arabicTitle: 'نوع المساهمة', value: this.certificateData.contributionTypeName },
        { englishTitle: 'Contribution Capital Value ', arabicTitle: 'رأس مال المساهمة', value: this.certificateData.contributionCapitalValue },
        { englishTitle: 'Contribution Duration', arabicTitle: 'مدة المساهمة', value: this.certificateData.contributionDuration },

        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }
  // helper methods
  getDate(date: Date) {
    return new Intl.DateTimeFormat('AR-EG', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
  }
}

