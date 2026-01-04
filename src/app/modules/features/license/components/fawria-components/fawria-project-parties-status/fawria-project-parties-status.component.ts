import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectListService } from '../../../services/project-list.service';
import { ProjectPartiesStatusDto } from '../../../models/project-parties-status-model';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { confirmationPopupData, notePopupData, PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-fawria-project-parties-status',
  templateUrl: './fawria-project-parties-status.component.html',
  styleUrls: ['./fawria-project-parties-status.component.scss']
})
export class FawriaProjectPartiesStatusComponent implements OnInit {
  isOwner: boolean = false;
  projectPartiesStatusList: ProjectPartiesStatusDto[] = [];
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private _licenseProjectService: ProjectListService,
    private _shareservice: SharedLicenseProjectService,
    private _popupService: PopupService,
  ) {
    // Get licenseProjectId from router state during navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const stateId = navigation.extras.state['licenseProjectId'];
      if (stateId) {
        this.licenseProjectId = stateId;
        // Store it in localStorage for future use
        this._shareservice.setLicenseProjectIdInLocalStorage(this.licenseProjectId);
      }
    }
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.isOwner = params['isOwner'] === 'true';
    });
    this.getLicenseProjectId();
  }

  private getLicenseProjectId() {
    // If not set from router state, try to get from localStorage
    if (!this.licenseProjectId || this.licenseProjectId === '00000000-0000-0000-0000-000000000000') {
      this.licenseProjectId = this._shareservice.getLicenseProjectIdStorage() as string;
    }

    if(this.licenseProjectId && this.licenseProjectId !== '00000000-0000-0000-0000-000000000000')
      this.getProjectPartiesStatus()
  }

  getProjectPartiesStatus(){
    this._licenseProjectService.GetProjectPartiesStatus(this.licenseProjectId, this.isOwner).subscribe((res) => {
      if (res.isDone) {
        this.projectPartiesStatusList = res.data as ProjectPartiesStatusDto[];
      }
    })
  }

  showRejectionReason(rejectReason: string, name: string): void {
    let Data = {
      popupType: 'primary',
      title: " أسباب الرفض " + name,
      staticMessage: rejectReason,
      id: "AddEditConnectionWithServicesProviderComponent",
      showCloseButtonOnly: true,
      closeButtonText: 'إغلاق'
    } as confirmationPopupData;
    this._popupService.updateConfirmationPopupData(Data);
  }
  
}
