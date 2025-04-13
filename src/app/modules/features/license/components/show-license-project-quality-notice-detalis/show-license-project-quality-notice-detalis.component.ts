import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectQualityNoticeDto } from '../../dataModels/license-project-quality-notice-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectQualityNoticeService } from '../../services/license-project-quality-notice.service';

@Component({
  selector: 'app-show-license-project-quality-notice-detalis',
  templateUrl: './show-license-project-quality-notice-detalis.component.html',
  styleUrls: ['./show-license-project-quality-notice-detalis.component.scss']
})
export class ShowLicenseProjectQualityNoticeDetalisComponent {
  subscriptions: Subscription[] = [];
  licenseProjectQualityNoticId: string | null =null;
  licenseProjectQualityNoticeData?:LicenseProjectQualityNoticeDto;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectQualityNoticId();
  }



  private getLicenseProjectQualityNoticId() {
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.getLicenseProjectQualityNoticeId().subscribe((res) => {
        this.licenseProjectQualityNoticId=res;
          this.getLicenseProjectQualityNoticById();

      })
    )
  }

  private getLicenseProjectQualityNoticById() {
    
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.GetLicenseProjectQualityNoticeById( this.licenseProjectQualityNoticId as string).subscribe((res) => {
          this.licenseProjectQualityNoticeData=res as LicenseProjectQualityNoticeDto;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
