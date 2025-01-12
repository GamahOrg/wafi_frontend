import { AfterViewInit, Component, Input } from '@angular/core';
import { CertificateTemplate, LicenseCertificateDto } from '../../models/license-certification.model';

@Component({
  selector: 'app-initial-certificate',
  templateUrl: './initial-certificate.component.html',
  styleUrls: ['./initial-certificate.component.scss']
})
export class InitialCertificateComponent implements AfterViewInit{
  @Input() className?: string;
  @Input() certificateData!: LicenseCertificateDto;

  certificateTemplateDate: CertificateTemplate | null = null;
  constructor() { }

  ngAfterViewInit(): void {
    console.log("this.certificateData", this.certificateData)
  }
  
}
