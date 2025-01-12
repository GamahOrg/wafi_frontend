import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectProblemPagingDto, levelType, statusProblem } from '../../dataModels/license-project-problem-paging-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectProblemService } from '../../services/license-project-problem.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { LicenseProjectProblemsCountsDto } from '../../dataModels/license-project-problems-counts-dto';
import { AddEditProblemLogComponent } from '../add-edit-problem-log/add-edit-problem-log.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ShowProblemLogComponent } from '../show-problem-log/show-problem-log.component';

@Component({
  selector: 'app-problem-log',
  templateUrl: './problem-log.component.html',
  styleUrls: ['./problem-log.component.scss']
})
export class ProblemLogComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectProblemPagingDto[]> = {} as Pagination<LicenseProjectProblemPagingDto[]>;
  licenseProjectProblemCounts?: LicenseProjectProblemsCountsDto;
  levelType=levelType;
  constructor(
    private _licenseProjectProblemService: LicenseProjectProblemService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.loadComponentData();
    }
  }
  loadComponentData(): void {
    const requests = [
      this._licenseProjectProblemService.getLicenseProjectProblemCounts(this.licenseProjectId as string),
      this._licenseProjectProblemService.getLicenseProjectProblems(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.licenseProjectProblemCounts = results[0] as LicenseProjectProblemsCountsDto;
        this.updateRequestList(results[1] as Pagination<LicenseProjectProblemPagingDto[]>);
      }
    });
    this.subscriptions.push(subscriptions);
  }
  private updateRequestList(licenseProjectProblemResult: Pagination<LicenseProjectProblemPagingDto[]>): void {
    this.reqList = licenseProjectProblemResult;
    if(this.reqList && this.reqList.results && this.reqList.results.length >0)
      {
         this.reqList.results.forEach(item => {
          if(item.levelTypeId)
            {
          
          if( item.levelTypeId== levelType.high)
            {
              item.levelClassValue="high"
            }
             
              else if(item.levelTypeId== levelType.medium)
                {
                  item.levelClassValue="medium"
                }
                else if(item.levelTypeId== levelType.low)
                  {
                    item.levelClassValue="low"
                  } 
                }
                if(item.statusId)
                  {
                    if(item.statusId==statusProblem.opened)
                      {
                        
                        item.statusClassValue="high"
                      }
                      else if(item.statusId==statusProblem.closed)
                        {
                          
                          item.statusClassValue="medium"
                        }
                  }  
        }); 
        
      }
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }
  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
      })
    )
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
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._licenseProjectProblemService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.loadComponentData()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadComponentData()
  }
  openEditProblemLogDialog(licenseProjectProblemId: string): void {
    
    this._licenseProjectProblemService.setLicenseProjectProblemId(licenseProjectProblemId);
    let Data = {
      title: "إضافة او تعديل المشكلة",
      component: AddEditProblemLogComponent,
      id: "AddEditProblemLogComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  openShowProblemLogDialog(licenseProjectProblemId: string): void {
    
    this._licenseProjectProblemService.setLicenseProjectProblemId(licenseProjectProblemId);
    let Data = {
      title: "عرض تفاصيل المشكلة",
      component: ShowProblemLogComponent,
      id: "ShowProblemLogComponent",
      buttons:[]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
