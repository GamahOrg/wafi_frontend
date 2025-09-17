import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EngineeringManagementLicenseProjectProblemService } from '../../../service/license-project-problem.service';
import { LicenseRequestListService } from '../../../services/license-request-list-service.service';
import { LicenseProjectProblemDto } from '../../../models/license-project-problem-dto';

@Component({
  selector: 'app-show-problem-log',
  templateUrl: './show-problem-log.component.html',
  styleUrls: ['./show-problem-log.component.scss'],
  standalone: false
})
export class ShowProblemLogComponent implements OnInit, OnDestroy {
  licenseProjectProblem?: LicenseProjectProblemDto;
  licenseProjectProblemId: string | null = null;
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  priorityValue: string = '';
  flag: boolean = false;
  
  localization = {
    recommendationText: 'نص التوصية / المقترح: ',
    responsibleParty: 'الجهة المسئولة: ',
    expectedImplementationDate: 'تاريخ التنفيذ المتوقع: ',
    status: 'الحالة: ',
    notes: 'ملاحظات: ',
    replies: 'الردود: ',
    employee: 'الموظف: ',
    date: 'التاريخ: '
  }

  constructor(
    private _licenseProjectProblemService: EngineeringManagementLicenseProjectProblemService,
    private _licenseRequestListService: LicenseRequestListService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._licenseRequestListService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectProblemId();
    }
  }
  private getLicenseProjectProblemId() {
    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemId().subscribe((res) => {
        this.licenseProjectProblemId = res;
        
        this.getLicenseProjectProblemById();

      })
    )
  }

  private getLicenseProjectProblemById() {

    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemById(this.licenseProjectProblemId as string).subscribe((res) => {
        this.licenseProjectProblem = res as LicenseProjectProblemDto;
        console.log(res);
        
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
