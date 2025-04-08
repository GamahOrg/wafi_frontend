import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { unitslist, zonelist } from '../../dataModels/planed-engineer-project-details';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { EngineeringSupervisionReportActualProjectDeteilsService } from '../../services/engineering-supervision-report-actual-project-deteils.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import {AddEditActualProjectDetailsComponent} from '../add-edit-actual-project-details/add-edit-actual-project-details.component'
import {ActualProjectDetailsComponent} from '../actual-project-details/actual-project-details.component'
import { ActualValueReportPagingListDto,LicenseProjectEngineeringRequestStatusEnum } from '../../models/actual-value-report-paging-list-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';

@Component({
  selector: 'app-monthlyengineering-supervision-reports-project-details',
  templateUrl: './monthlyengineering-supervision-reports-project-details.component.html',
  styleUrls: ['./monthlyengineering-supervision-reports-project-details.component.scss']
})
export class MonthlyengineeringSupervisionReportsProjectDetailsComponent {
 licenseProjectId!: string | null
   subscriptions: Subscription[] = [];
   licenseProjectEngineeringRequestStatusEnum=LicenseProjectEngineeringRequestStatusEnum
   zoneslist!: zonelist[]
   selectedZone!: string
 actualValueReport?:ActualValueReportPagingListDto
   newPageNo: number = 1;
   units: Pagination<unitslist[]> = {} as Pagination<unitslist[]>;
   engineerinSupervisionPlannedReportAllowToEdit: boolean = false;
   pagintationData: pagination = {
     currentPage: 1,
     pageCount: 0,
     pageSize: 10,
     totalCount: 0,
   };
   monthDate ?:Date;

 
   constructor(private _requestDetails: EngineeringSupervisionReportActualProjectDeteilsService,
     private _sharedLicenseProjectService: SharedLicenseProjectService,
     private _paginationService: PaginationService,
     private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
     private _popupService: PopupService) {
 
   }
 
   ngOnInit(): void {
     this.getLicenseProjectIdStorage()
     this.getzonesList()
     this.watchPaginationActions();
     this.getmonthDate();
   }
 
 getmonthDate() {
      debugger;
      this.subscriptions.push(
        this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
          debugger;
          if (res) {
            debugger;
            this.actualValueReport= res as ActualValueReportPagingListDto;
          }
        })
      )
    }
   private getLicenseProjectIdStorage(): void {
     this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
   }
 
  
  getLicenseProjectBuildingBlocks() {
     this.subscriptions.push(
       this._requestDetails.getLicenseProjectBuildingBlocks(this.selectedZone, this.pagintationData.currentPage, this.pagintationData.pageSize)
         .subscribe(
           (res) => {
             this.updateRequestList(res as Pagination<unitslist[]>)
           }
         )
     )
   }
 
 
 
   openAddEditeDialog(licenseProjectUnit: unitslist) {
this._requestDetails.setLicenseProjectUnit(licenseProjectUnit);
    let Data = {
           title: "تعديل بيانات  تفاصيل المشروع",
           component: AddEditActualProjectDetailsComponent,
           id: "AddEditActualProjectDetailsComponent"
         } as PopupData;
         this._popupService.updatePopupData(Data);
   }
 
   openDetailsDialog(licenseProjectUnit: unitslist) {
    this._requestDetails.setLicenseProjectUnit(licenseProjectUnit);
    let Data = {
      title: "عرض بيانات  تفاصيل المشروع",
      component: ActualProjectDetailsComponent,
      id: "ActualProjectDetailsComponent",
      buttons:[]
    } as PopupData;
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
     this.getLicenseProjectBuildingBlocks()
   }

 
   getzonesList() {
     this.subscriptions.push(
       this._requestDetails.getZonesList(this.licenseProjectId).subscribe(res => {
         if (res)
           this.zoneslist = res.data ?? [];
         if (this.zoneslist.length > 0) {
           this.selectedZone = this.zoneslist[0].id
           this.getLicenseProjectBuildingBlocks()
 
         }
       })
     )
   }
 
 
   selected(e: any) {
     this.selectedZone = e.target.value
     this.getLicenseProjectBuildingBlocks()
   }
 
   ngOnDestroy(): void {
     this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
   }
}
