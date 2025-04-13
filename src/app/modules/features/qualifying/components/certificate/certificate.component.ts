import { Component, Input, AfterViewInit } from '@angular/core';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';
import { QualificationRequestTypeCode } from '../../dataModels/enum/qualification-request-type';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements AfterViewInit {
  @Input() className?: string;
  @Input() certificateData!: QualificationCertificate;

  get QualificationRequestTypeCodeEnum(){
    return QualificationRequestTypeCode
  }

  get RequestCodeEnum() {
    return RequestCodeEnum;
  }
  qualificationRequestType: string = '';
  qualificationRequestTypeCode! : QualificationRequestTypeCode
  ngOnInit(): void {
    this.qualificationRequestType =
    RequestCodeEnum[
      this.certificateData
        .qualificationRequestType as keyof typeof RequestCodeEnum
      ];

      this.qualificationRequestTypeCode = this.certificateData.qualificationRequestType as QualificationRequestTypeCode;

      
  }
  ngAfterViewInit(): void {

  }
}
