import { Component, OnInit, OnDestroy } from '@angular/core';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectEngineeringConsultantDto } from '../../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-dto';
import { CustomerShortDto, FacilityShortDto } from '../../models/facility-short-dto';
import { BehaviorSubject, forkJoin, Subscription } from 'rxjs';
import { LicenseProjectDelegatorService } from '../../services/license-project-delegator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LicenseProjectCharteredAccountantService } from '../../services/license-project-chartered-accountant.service';
import { LicenseProjectCharteredAccountantDto } from '../../dataModels/license-project-chartered-accountant/license-project-chartered-accountant-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ProjectRealStateDeveloperService } from '../../services/licenseProjects/project-real-state-developer.service';
import { ExchangeDocumentService, } from '../../services/exchange-document.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Delegator, DelegatorRequest } from '../../dataModels/delegator.dto';
import { LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';



@Component({
  selector: 'app-exchange-documents-select-delegators',
  templateUrl: './exchange-documents-select-delegators.component.html',
  styleUrls: ['./exchange-documents-select-delegators.component.scss']
})
export class ExchangeDocumentsSelectDelegatorsComponent implements OnInit, OnDestroy {
  
  subscriptions: Subscription[] = [];
  isSaving: boolean = false;
  
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  engineeringEntity!: LicenseProjectEngineeringConsultantDto;
  accountantEntity: LicenseProjectCharteredAccountantDto = <any>{};
  userData: customerResponse | null = null;
  userFacilityId: string = '00000000-0000-0000-0000-000000000000';
  
  facility$: BehaviorSubject<FacilityShortDto | undefined> =
      new BehaviorSubject<FacilityShortDto | undefined>(undefined);
  licenseProjectEngineeringDelegators: CustomerShortDto[] = [];
  licenseProjectAccountantDelegators: CustomerShortDto[] = [];
  developerDelegators: CustomerShortDto[] = [];

  // Engineering delegators management
  selectedEngineeringDelegators: CustomerShortDto[] = [];
  availableEngineeringDelegators: CustomerShortDto[] = [];

  // Accountant delegators management
  selectedAccountantDelegators: CustomerShortDto[] = [];
  availableAccountantDelegators: CustomerShortDto[] = [];

  // Developer delegators management
  selectedDeveloperDelegators: CustomerShortDto[] = [];
  availableDeveloperDelegators: CustomerShortDto[] = [];

  form!: FormGroup;
  // Track which delegators are checked in dropdowns
  checkedEngineeringDelegators: Set<string> = new Set();
  checkedAccountantDelegators: Set<string> = new Set();
  checkedDeveloperDelegators: Set<string> = new Set();
  licenseProjectDelegators: LicenseProjectDelegatorsDto[] = [];

  constructor(
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
    private formGroup: FormBuilder,
    private _charteredAccountantService: LicenseProjectCharteredAccountantService,
    private _userDataService: UserDataService,
    private _projectRealStateDeveloperService: ProjectRealStateDeveloperService,
    private _exchangeDocumentService: ExchangeDocumentService,
    private _toastrNotificationService: ToastrNotificatioService,
    public dialogRef: MatDialogRef<ExchangeDocumentsSelectDelegatorsComponent>,
    private _popupService: PopupService,
    
  ) { }

  ngOnInit(): void {
    this.onGet();
    this.buildForm();
    this.observeconfirmAction();
  }

  buildForm() {
      this.form = this.formGroup.group({
        authorizedToSignEngineeringDelegator: ['', Validators.compose([Validators.required])],
        authorizedToSignAccountantDelegator: ['', Validators.compose([Validators.required])],
        authorizedToSignDeveloperDelegator: ['', Validators.compose([Validators.required])],
      });
    }

    engineeringConsultantFacility:FacilityShortDto = new FacilityShortDto();
    charteredAccountantFacility:FacilityShortDto = new FacilityShortDto();
    setEngineeringFacility($event: any) {
      this.engineeringConsultantFacility = $event;
      
    }
    setAccountantFacility($event: any) {
      this.charteredAccountantFacility = $event;
      
    }

    GetProjectDelegatorByFacilityId(): void {
        this.subscriptions.push(
          this._licenseProjectDelegatorService.GetFacilitySubCustomers(this.engineeringConsultantFacility.id as string)
            .subscribe((res) => {
              if (res) {
                this.licenseProjectEngineeringDelegators = res as CustomerShortDto[];
                this.updateAvailableEngineeringDelegators();
              }
            })
        );
        this.subscriptions.push(
          this._licenseProjectDelegatorService.GetFacilitySubCustomers(this.charteredAccountantFacility.id as string)
            .subscribe((res) => {
              if (res) {
                this.licenseProjectAccountantDelegators = res as CustomerShortDto[];
                this.updateAvailableAccountantDelegators();
              }
            })
        );
        this.subscriptions.push(
          this._projectRealStateDeveloperService.GetFacilitySubCustomers(this.userFacilityId as string)
            .subscribe((res) => {
              if (res) {
                this.developerDelegators = res as CustomerShortDto[];
                this.updateAvailableDeveloperDelegators();
              }
            })
        );
      }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId){
      this.onGet();
    }
  }

  onGet() {
    this.loadUserData();
this.licenseProjectId = this._popupService.popupData.getValue()?.data?.licenseProjectId as string;
     this.subscriptions.push(
  forkJoin({
    delegators: this._licenseProjectDelegatorService.GetProjectDelegatorByLicenseProjectId(this.licenseProjectId),
    engineering: this._engineeringConsultantService.fawryLicenseGetAsync(this.licenseProjectId),
    accountant: this._charteredAccountantService.fawryLicenseGetAsync(this.licenseProjectId)
  }).subscribe(({ delegators, engineering, accountant }) => {
    
    // 1. Handle Project Delegators
    if (delegators.isDone) {
      this.selectedDeveloperDelegators = delegators.data?.map(d => d.delegatorCustomer) as CustomerShortDto[];
    }

    // 2. Handle Engineering Consultant
    if (engineering.data) {
      this.engineeringEntity = engineering.data;
      this.facility$.next(this.engineeringEntity.engineeringConsultant);
      this.setEngineeringFacility(this.engineeringEntity.engineeringConsultant);
      
      const engDelegators = this.engineeringEntity.licenseProjectEngineeringConsultantAuthorizedToSignDelegators;
      if (engDelegators && engDelegators.length > 0) {
        this.selectedEngineeringDelegators = engDelegators.map(d => d.delegatorCustomer);
        this.updateAvailableEngineeringDelegators();
      }
    }

    // 3. Handle Chartered Accountant
    if (accountant.data) {
      this.accountantEntity = accountant.data;
      this.facility$.next(this.accountantEntity.charteredAccountant);
      this.setAccountantFacility(this.accountantEntity.charteredAccountant);
      
      const accDelegators = this.accountantEntity.licenseProjectCharteredAccountantAuthorizedToSignDelegators;
      if (accDelegators && accDelegators.length > 0) {
        this.selectedAccountantDelegators = accDelegators.map(d => d.delegatorCustomer);
        this.updateAvailableAccountantDelegators();
      }
    }

      this.GetProjectDelegatorByFacilityId();

  })
);
    
  }

  private loadUserData(): void {
    const sub = this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      this.userFacilityId = this.userData?.isEmployee
        ? '00000000-0000-0000-0000-000000000000'
        : this.userData?.facilities[0]?.id ?? this.userFacilityId;
    });
    this.subscriptions.push(sub);
    
  }

  addEngineeringDelegator(delegator: CustomerShortDto): void {
    if (delegator && !this.selectedEngineeringDelegators.some(d => d.id === delegator.id)) {
      this.selectedEngineeringDelegators.push(delegator);
      this.updateAvailableEngineeringDelegators();
    }
  }

  toggleEngineeringDelegator(delegator: CustomerShortDto): void {
    const index = this.selectedEngineeringDelegators.findIndex(d => d.id === delegator.id);
    if (index > -1) {
      this.selectedEngineeringDelegators.splice(index, 1);
      this.checkedEngineeringDelegators.delete(delegator.id);
    } else {
      this.selectedEngineeringDelegators.push(delegator);
      this.checkedEngineeringDelegators.add(delegator.id);
    }
    this.updateAvailableEngineeringDelegators();
  }

  removeEngineeringDelegator(delegatorId: string): void {
    this.selectedEngineeringDelegators = this.selectedEngineeringDelegators.filter(d => d.id !== delegatorId);
    this.checkedEngineeringDelegators.delete(delegatorId);
    this.updateAvailableEngineeringDelegators();
  }

  private updateAvailableEngineeringDelegators(): void {
    const selectedIds = this.selectedEngineeringDelegators.map(d => d.id);
    this.availableEngineeringDelegators = this.licenseProjectEngineeringDelegators.filter(
      d => !selectedIds.includes(d.id)
    );
  }

  addAccountantDelegator(delegator: CustomerShortDto): void {
    if (delegator && !this.selectedAccountantDelegators.some(d => d.id === delegator.id)) {
      this.selectedAccountantDelegators.push(delegator);
      this.updateAvailableAccountantDelegators();
    }
  }

  toggleAccountantDelegator(delegator: CustomerShortDto): void {
    const index = this.selectedAccountantDelegators.findIndex(d => d.id === delegator.id);
    if (index > -1) {
      this.selectedAccountantDelegators.splice(index, 1);
      this.checkedAccountantDelegators.delete(delegator.id);
    } else {
      this.selectedAccountantDelegators.push(delegator);
      this.checkedAccountantDelegators.add(delegator.id);
    }
    this.updateAvailableAccountantDelegators();
  }

  removeAccountantDelegator(delegatorId: string): void {
    this.selectedAccountantDelegators = this.selectedAccountantDelegators.filter(d => d.id !== delegatorId);
    this.checkedAccountantDelegators.delete(delegatorId);
    this.updateAvailableAccountantDelegators();
  }

  private updateAvailableAccountantDelegators(): void {
    const selectedIds = this.selectedAccountantDelegators.map(d => d.id);
    this.availableAccountantDelegators = this.licenseProjectAccountantDelegators.filter(
      d => !selectedIds.includes(d.id)
    );
  }

  addDeveloperDelegator(delegator: CustomerShortDto): void {
    if (delegator && !this.selectedDeveloperDelegators.some(d => d.id === delegator.id)) {
      this.selectedDeveloperDelegators.push(delegator);
      this.updateAvailableDeveloperDelegators();
    }
  }

  toggleDeveloperDelegator(delegator: CustomerShortDto): void {
    debugger;
    const index = this.selectedDeveloperDelegators.findIndex(d => d.id === delegator.id);
    if (index > -1) {
      this.selectedDeveloperDelegators.splice(index, 1);
      this.checkedDeveloperDelegators.delete(delegator.id);
    } else {
      this.selectedDeveloperDelegators.push(delegator);
      this.checkedDeveloperDelegators.add(delegator.id);
    }
    this.updateAvailableDeveloperDelegators();
  }

  removeDeveloperDelegator(delegatorId: string): void {
    debugger;
    this.selectedDeveloperDelegators = this.selectedDeveloperDelegators.filter(d => d.id !== delegatorId);
    this.checkedDeveloperDelegators.delete(delegatorId);
    this.updateAvailableDeveloperDelegators();
  }

  private updateAvailableDeveloperDelegators(): void {
    const selectedIds = this.selectedDeveloperDelegators.map(d => d.id);
    this.availableDeveloperDelegators  = this.developerDelegators.filter(
      d => !selectedIds.includes(d.id)
    );
    
  }

  saveDelegators(): void {
    if (this.selectedEngineeringDelegators.length === 0 && 
        this.selectedAccountantDelegators.length === 0 && 
        this.selectedDeveloperDelegators.length === 0) {
      this._toastrNotificationService.showError('يرجى اختيار مفوض واحد على الأقل');
      return;
    }

    this.isSaving = true;

    const delegators: Delegator[] = [];

    // Add developer delegators (type 1)
    if (this.selectedDeveloperDelegators.length > 0) {
      delegators.push({
        delegatorId: this.selectedDeveloperDelegators.map(d => d.id),
        delegationType: 3
      });
    }else{
      delegators.push({
        delegatorId: [],
        delegationType: 3
      });
    }

    // Add engineer delegators (type 2)
    if (this.selectedEngineeringDelegators.length > 0) {
      delegators.push({
        delegatorId: this.selectedEngineeringDelegators.map(d => d.id),
        delegationType: 1
      });
    }else{
      delegators.push({
        delegatorId: [],
        delegationType: 1
      });
    }

    // Add accountant delegators (type 3)
    if (this.selectedAccountantDelegators.length > 0) {
      delegators.push({
        delegatorId: this.selectedAccountantDelegators.map(d => d.id),
        delegationType: 2
      });
    }else{
      delegators.push({
        delegatorId: [],
        delegationType: 2
      });
    }

    const request: DelegatorRequest = {
      licenseProjectId: this.licenseProjectId as string,
      delegators: delegators
    };

    this.subscriptions.push(
      this._exchangeDocumentService.SaveDelegators(request).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.isDone) {
            this._toastrNotificationService.showSuccess('تم حفظ المفوضين بنجاح');
            this.dialogRef.close();
          } else {
            this._toastrNotificationService.showError(response.message || 'حدث خطأ أثناء حفظ البيانات');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this._toastrNotificationService.showError('حدث خطأ أثناء حفظ المفوضين');
          console.error('Error saving delegators:', err);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private observeconfirmAction() {
      this.subscriptions.push(
        this._popupService.confirmAction.subscribe((res: PopupData) => {
          this.saveDelegators()
        })
      )
    }

    public closeDialogue() {
      this._popupService.closeDialog.emit();
    }

    public isDeveloperSelected(id: string): boolean {
      debugger;
      return this.selectedDeveloperDelegators.some(d => d.id === id);
    }
    public isEngineeringSelected(id: string): boolean {
      debugger;
      return this.selectedEngineeringDelegators.some(d => d.id === id);
    }
    public isAccountantSelected(id: string): boolean {
      debugger;
      return this.selectedAccountantDelegators.some(d => d.id === id);
    }
}
