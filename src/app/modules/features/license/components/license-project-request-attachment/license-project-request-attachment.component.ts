import { Component } from '@angular/core';
import { LicenseProjectRequestAttachmentDto } from '../../dataModels/license-project-request-attachment-dto';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-request-attachment',
  templateUrl: './license-project-request-attachment.component.html',
  styleUrls: ['./license-project-request-attachment.component.scss']
})
export class LicenseProjectRequestAttachmentComponent {
  licenseProjectRequestAttachment: LicenseProjectRequestAttachmentDto = new LicenseProjectRequestAttachmentDto();
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) { }
  baseUrl = `${environment.baseURL}/`;
  ngOnInit(): void {
    this.updateLicenseProjectRequestAttachment();
  }
  private updateLicenseProjectRequestAttachment(): void {

    this.subscriptions.push(
      this._licenseDetailService.licenseProjectRequestAttachment$.subscribe((res: LicenseProjectRequestAttachmentDto[] | null) => {
        if (res) {
          this.licenseProjectRequestAttachment = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
