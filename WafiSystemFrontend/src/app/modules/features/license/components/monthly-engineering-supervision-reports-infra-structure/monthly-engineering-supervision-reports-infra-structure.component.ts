import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { EngineeringSupervisionPlannedReportActualInfrastructureDto } from '../../dataModels/engineering-supervision-planned-report-actual-infrastructure-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from '../../services/engineering-supervision-planned-report-actual-infrastructure.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AddEditActualInfrastructurComponent } from '../add-edit-actual-infrastructur/add-edit-actual-infrastructur.component';
import { LicenseProjectConnectionWithServicesProviderDto } from '../../dataModels/license-project-connection-with-services-provider-dto';
import { AddEditConnectionWithServicesProviderComponent } from '../add-edit-connection-with-services-provider/add-edit-connection-with-services-provider.component';
import { ActualLicenseProjectInfrastructureNetworksStatusDto } from '../../dataModels/actual-license-project-infrastructure-networks-status-dto';
import {ShowActualInfrastructureNetworksStatusComponent} from '../show-actual-infrastructure-networks-status/show-actual-infrastructure-networks-status.component'
import {AddEditActualInfrastructureNetworksStatusComponent} from '../add-edit-actual-infrastructure-networks-status/add-edit-actual-infrastructure-networks-status.component'
import { ActualValueReportPagingListDto,LicenseProjectEngineeringRequestStatusEnum } from '../../models/actual-value-report-paging-list-dto';
@Component({
  selector: 'app-monthly-engineering-supervision-reports-infra-structure',
  templateUrl: './monthly-engineering-supervision-reports-infra-structure.component.html',
  styleUrls: ['./monthly-engineering-supervision-reports-infra-structure.component.scss']
})
export class MonthlyEngineeringSupervisionReportsInfraStructureComponent {
 showRateFlag:boolean=true;
    subscriptions: Subscription[] = [];
    licenseProjectEngineeringRequestStatusEnum=LicenseProjectEngineeringRequestStatusEnum
    engineeringSupervisionPlannedReportActualInfrastructureDto?: EngineeringSupervisionPlannedReportActualInfrastructureDto ;
    licenseProjectConnectionWithServicesProvider?:LicenseProjectConnectionWithServicesProviderDto;
    actualLicenseProjectInfrastructureNetworksStatusList?:ActualLicenseProjectInfrastructureNetworksStatusDto[]
  monthDate ?:Date;
  actualValueReport?:ActualValueReportPagingListDto;
    licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
    showValidation: boolean = false;
    constructor(
     private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
     private _engineeringSupervisionPlannedReportActualInfrastructureService: EngineeringSupervisionPlannedReportActualInfrastructureService,
      private _sharedLicenseProjectService: SharedLicenseProjectService,
      private _popupService: PopupService,
      
      
    ) { }
  
    ngOnInit(): void {
      this.getLicenseProjectIdStorage();
      this.observesubmitSuccessfullyEventEmitter();
    }
  
   
    private getLicenseProjectIdStorage(): void {
      this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
      debugger;
      if(this.licenseProjectId)
        this.getmonthDate()
    }
    getmonthDate() {
      debugger;
      this.subscriptions.push(
        this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
          debugger;
          if (res) {
            debugger;
            this.actualValueReport= res as ActualValueReportPagingListDto;
            this.monthDate = this.actualValueReport.monthDate as Date;
           this.loadComponentData();
          }
        })
      )
    }

      private loadComponentData() {
        const requests = [
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getLicenseProjectEngineeringActualInfrastructureRates(this.licenseProjectId as string,this.monthDate as Date),
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getLicenseProjectConnectionWithServicesProvider(this.licenseProjectId as string,this.monthDate as Date),
          this._engineeringSupervisionPlannedReportActualInfrastructureService.getActualLicenseInfrastructureElement(this.licenseProjectId as string,this.monthDate as Date)

        ];
    
        const subscriptions = forkJoin(requests).subscribe((results) => {
          this.engineeringSupervisionPlannedReportActualInfrastructureDto=results[0] as EngineeringSupervisionPlannedReportActualInfrastructureDto;
          this.licenseProjectConnectionWithServicesProvider=results[1] as LicenseProjectConnectionWithServicesProviderDto;
          this.actualLicenseProjectInfrastructureNetworksStatusList=results[2] as ActualLicenseProjectInfrastructureNetworksStatusDto[];

         
        });
    
        this.subscriptions.push(subscriptions);
      }


   openAddEditActualInfrastructureDialog(): void {
     this._engineeringSupervisionPlannedReportActualInfrastructureService.
     setEngineeringSupervisionPlannedReportActualInfrastructureDto(this.engineeringSupervisionPlannedReportActualInfrastructureDto as EngineeringSupervisionPlannedReportActualInfrastructureDto);
        let Data = {
          title: "تعديل بيانات نظرة عامة",
          component: AddEditActualInfrastructurComponent,
          id: "AddEditActualInfrastructurComponent"
        } as PopupData;
        this._popupService.updatePopupData(Data);
        
      } 

      openShowDialog(data:ActualLicenseProjectInfrastructureNetworksStatusDto): void {
        this._engineeringSupervisionPlannedReportActualInfrastructureService.
        setActualLicenseProjectInfrastructureNetworksStatusDto(data);
           let Data = {
             title: "عرض بيانات  موقف أعمال شبكات البنية التحتية",
             component: ShowActualInfrastructureNetworksStatusComponent,
             id: "ShowActualInfrastructureNetworksStatusComponent",
             buttons:[]
           } as PopupData;
           this._popupService.updatePopupData(Data);
           
         } 
         openAddEditeActualElementDialog(data:ActualLicenseProjectInfrastructureNetworksStatusDto)
         {
          this._engineeringSupervisionPlannedReportActualInfrastructureService.
          setActualLicenseProjectInfrastructureNetworksStatusDto(data);

          let Data = {
            title: "تعديل  بيانات  موقف أعمال شبكات البنية التحتية",
            component: AddEditActualInfrastructureNetworksStatusComponent,
            id: "AddEditActualInfrastructureNetworksStatusComponent"
          } as PopupData;
          this._popupService.updatePopupData(Data);
          
        } 
         
        
       
      openAddConnectionWithServicesProviderDialog(): void {
        this._engineeringSupervisionPlannedReportActualInfrastructureService.
        setLicenseProjectConnectionWithServicesProviderDto(this.licenseProjectConnectionWithServicesProvider as LicenseProjectConnectionWithServicesProviderDto);
           let Data = {
             title: "تعديل بيانات  موقف ربط الخدمات مع مزودي الخدمة للمشروع",
             component: AddEditConnectionWithServicesProviderComponent,
             id: "AddEditConnectionWithServicesProviderComponent"
           } as PopupData;
           this._popupService.updatePopupData(Data);
           
         } 
      private observesubmitSuccessfullyEventEmitter(){
        this.subscriptions.push(
          this._engineeringSupervisionPlannedReportActualInfrastructureService.submitSuccessfullyEventEmitter.subscribe(res=>{
            this.getLicenseProjectIdStorage()
          }));
      }
    ngOnDestroy(): void {
     this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
   }
 
}
