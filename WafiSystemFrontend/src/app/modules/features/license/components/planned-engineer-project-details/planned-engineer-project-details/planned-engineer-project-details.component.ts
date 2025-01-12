import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlannedEngineerProjectDetailsService } from '../../../services/planned-engineer-project-details/planned-engineer-project-details.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { Subscription } from 'rxjs';
import { unitslist, zonelist } from '../../../dataModels/planed-engineer-project-details';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { CompletionRatesComponent } from '../../completion-rates/completion-rates.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../../services/license-project-engineering-supervision-planned-report-detail.service';

@Component({
  selector: 'app-planned-engineer-project-details',
  templateUrl: './planned-engineer-project-details.component.html',
  styleUrls: ['./planned-engineer-project-details.component.scss']
})
export class PlannedEngineerProjectDetailsComponent implements OnInit, OnDestroy {
  licenseProjectId!: string | null
  subscriptions: Subscription[] = [];
  zoneslist!: zonelist[]
  selectedZone!: string

  newPageNo: number = 1;
  units: Pagination<unitslist[]> = {} as Pagination<unitslist[]>;
  engineerinSupervisionPlannedReportAllowToEdit: boolean = false;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };


  constructor(private _requestDetails: PlannedEngineerProjectDetailsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _popupService: PopupService) {

  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
    this.getzonesList()
    this.watchPaginationActions();
    this.getEngineerinSupervisionPlannedReportAllowToEdit();

  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }


  GetLicenseProjectBuildingBlocks() {
    this.subscriptions.push(
      this._requestDetails.GetLicenseProjectBuildingBlocks(this.selectedZone, this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe(
          (res) => {
            this.updateRequestList(res as Pagination<unitslist[]>)
          }
        )
    )
  }



  OpenCompletionRatesDialog(id: string, update: boolean) {
    this._requestDetails._isUpdated$.next(update)

    let Data = {
      id: id,
      title: 'نسبة الإنجاز',
      component: CompletionRatesComponent
    } as PopupData;

    if (!update) {
      Data.buttons = [
        {
          title: "إلغاء",
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false
        }];
    }

    this._popupService.updatePopupData(Data);
  }


  private updateRequestList(TypeListView: Pagination<unitslist[]>): void {
    this.units = TypeListView;
    this.setPaginationData(
      this.units.pageSize,
      this.units.totalCount,
      this.units.pageCount
    );
  }


  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }



  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }


  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    )
  }


  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.GetLicenseProjectBuildingBlocks()
  }
  getEngineerinSupervisionPlannedReportAllowToEdit() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.getEngineerinSupervisionPlannedReportAllowToEdit().subscribe(res => {
        if (res)
          this.engineerinSupervisionPlannedReportAllowToEdit = res;
      })
    )
  }

  getzonesList() {
    this.subscriptions.push(
      this._requestDetails.GetZonesList(this.licenseProjectId).subscribe(res => {
        if (res)
          this.zoneslist = res.data ?? [];
        if (this.zoneslist.length > 0) {
          this.selectedZone = this.zoneslist[0].id
          this.GetLicenseProjectBuildingBlocks()

        }
      })
    )
  }


  selected(e: any) {
    this.selectedZone = e.target.value
    this.GetLicenseProjectBuildingBlocks()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
