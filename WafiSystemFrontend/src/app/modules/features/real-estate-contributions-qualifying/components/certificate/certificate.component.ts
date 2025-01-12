import { Component, Input, AfterViewInit } from '@angular/core';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements AfterViewInit {
  @Input() className?: string;
  @Input() certificateData!: QualificationCertificate;

  get RequestCodeEnum() {
    return RequestCodeEnum;
  }
  qualificationRequestType: string = '';
  ngOnInit(): void {
    this.qualificationRequestType =
      RequestCodeEnum[
        this.certificateData
          .qualificationRequestType as keyof typeof RequestCodeEnum
      ];
  }
  ngAfterViewInit(): void {

  }
}
