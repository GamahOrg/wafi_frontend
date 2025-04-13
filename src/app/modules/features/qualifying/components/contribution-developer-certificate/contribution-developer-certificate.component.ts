import { Component, Input, OnInit } from '@angular/core';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { QualificationRequestTypeCode } from '../../dataModels/enum/qualification-request-type';
import type { QualificationCertificate } from '../../dataModels/qualification-certificate.model';

@Component({
  selector: 'app-contribution-developer-certificate',
  templateUrl: './contribution-developer-certificate.component.html',
  styleUrls: ['./contribution-developer-certificate.component.scss']
})
export class ContributionDeveloperCertificateComponent implements OnInit {

  @Input() className?: string;
  @Input() certificateData!: QualificationCertificate;

  get QualificationRequestTypeCodeEnum() {
    return QualificationRequestTypeCode
  }

  get RequestCodeEnum() {
    return RequestCodeEnum;
  }
  qualificationRequestType: string = '';
  qualificationRequestTypeCode!: QualificationRequestTypeCode
  ngOnInit(): void {
    this.qualificationRequestType =
      RequestCodeEnum[
      this.certificateData
        .qualificationRequestType as keyof typeof RequestCodeEnum
      ];

    this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType as QualificationRequestTypeCode;


  }

  getCertificatePeriod(period: number) {
    switch (period) {
      case 1: return "عام";
      case 2: return "عامين";
      case 3: return "ثلاثة أعوام";
    }
    return"عام";
  }

  constructor() { }


}
