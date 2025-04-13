import { Component } from '@angular/core';
import { LicenseProjectProblemDto } from '../../dataModels/license-project-problem-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectProblemService } from '../../services/license-project-problem.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-show-problem-log',
  templateUrl: './show-problem-log.component.html',
  styleUrls: ['./show-problem-log.component.scss']
})
export class ShowProblemLogComponent {

  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectProblemId: string | null =null;
  licenseProjectProblemData?:LicenseProjectProblemDto;
  priorityValue:string='';
  flag:boolean=false;
  constructor(
    private _licenseProjectProblemService: LicenseProjectProblemService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectProblemId();
    }
  }
  private getLicenseProjectProblemId() {
    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemId().subscribe((res) => {
        this.licenseProjectProblemId=res;
          this.getLicenseProjectProblemById();
      })
    )
  }
  private getLicenseProjectProblemById() {
    
    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemById( this.licenseProjectProblemId as string).subscribe((res) => {
          this.licenseProjectProblemData=res as LicenseProjectProblemDto;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
