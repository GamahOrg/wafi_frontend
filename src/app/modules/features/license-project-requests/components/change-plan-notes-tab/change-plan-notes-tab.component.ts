import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, filter, take } from 'rxjs';
import {
  ChangePlanApprovalDetailsDto,
  ChangePlanApprovalService,
  ChangePlanStatusEnum,
  FacilityTypeCategoryEnum,
  LicenseProjectRequestNoteDto,
  ProcessAccountantNotesDto,
  ProcessConsultantNotesDto,
  ProcessDeveloperNotesDto,
} from '../../services/change-plan-approval.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-change-plan-notes-tab',
  templateUrl: './change-plan-notes-tab.component.html',
  styleUrls: ['./change-plan-notes-tab.component.scss'],
})
export class ChangePlanNotesTabComponent implements OnInit, OnDestroy {
  notes: LicenseProjectRequestNoteDto[] = [];
  details: ChangePlanApprovalDetailsDto | null = null;
  subscriptions: Subscription[] = [];
  isProcessingMode = false;
  isSaving = false;
  notesForm!: FormGroup;

  readonly FacilityTypeCategoryEnum = FacilityTypeCategoryEnum;

  private requestId: string | null = null;
  private facilityId: string | null = null;

  constructor(
    private _changePlanApprovalService: ChangePlanApprovalService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    private _fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      this.subscriptions.push(
        this._changePlanApprovalService.getChangePlanRequestNotes(this.requestId).subscribe(res => {
          this.notes = res;
        })
      );
    }
    this.subscriptions.push(
      this._userDataService.getCustomerData().pipe(
        filter((res: customerResponse | null) => !!res?.facilities?.length),
        take(1)
      ).subscribe((res: customerResponse | null) => {
        this.facilityId = res!.facilities![0].id;
        if (this.requestId) this.loadDetails();
      })
    );
    this.subscriptions.push(
      this._changePlanApprovalService.openProcessingNotesTrigger$.subscribe(() => {
        if (this.showProcessingNotesButton) this.openProcessingNotes();
      })
    );
  }

  private buildForm(): void {
    this.notesForm = this._fb.group({
      justificationsAndReasons: [null],
      hasForceMajeure: [false],
      forceMajeureDocumentFileId: [null],
      reasonsAndJustificationsForChangingProjectPlan: [null],
      totalProjectCosts: [null],
      latestBankStatementFileId: [null],
    });
  }

  loadDetails(): void {
    this.subscriptions.push(
      this._changePlanApprovalService.getChangePlanFullDetails(this.requestId!, this.facilityId ?? undefined).subscribe(d => {
        this.details = d;
        if (d) this.patchForm(d);
      })
    );
  }

  private patchForm(d: ChangePlanApprovalDetailsDto): void {
    this.notesForm.patchValue({
      justificationsAndReasons: d.justificationsAndReasons,
      hasForceMajeure: d.hasForceMajeure,
      forceMajeureDocumentFileId: d.forceMajeureDocumentFileId,
      reasonsAndJustificationsForChangingProjectPlan: d.reasonsAndJustificationsForChangingProjectPlan,
      totalProjectCosts: d.totalProjectCosts,
      latestBankStatementFileId: d.latestBankStatementFileId,
    });
  }

  get showProcessingNotesButton(): boolean {
    if (!this.details) return false;
    const statusId = this.details.statusId;
    const cat = this.details.facilityTypeCategory;
    if (cat === FacilityTypeCategoryEnum.Developer && statusId === ChangePlanStatusEnum.CustomerFeedback) return true;
    if ((cat === FacilityTypeCategoryEnum.Accountant || cat === FacilityTypeCategoryEnum.Engineering)
      && statusId === ChangePlanStatusEnum.PendingConsultantAndAccountantCompletionAfterNotes) return true;
    return false;
  }

  openProcessingNotes(): void { this.isProcessingMode = true; }

  cancelProcessingNotes(): void {
    this.isProcessingMode = false;
    if (this.details) this.patchForm(this.details);
  }

  saveProcessingNotes(): void {
    if (!this.details || this.isSaving) return;
    this.isSaving = true;
    const cat = this.details.facilityTypeCategory;
    const v = this.notesForm.value;
    const id = this.details.id;
    let obs$;
    if (cat === FacilityTypeCategoryEnum.Developer) {
      const dto: ProcessDeveloperNotesDto = { id, justificationsAndReasons: v.justificationsAndReasons, hasForceMajeure: v.hasForceMajeure ?? false, forceMajeureDocumentFileId: v.forceMajeureDocumentFileId };
      obs$ = this._changePlanApprovalService.processDeveloperNotes(dto);
    } else if (cat === FacilityTypeCategoryEnum.Engineering) {
      const dto: ProcessConsultantNotesDto = { id, reasonsAndJustificationsForChangingProjectPlan: v.reasonsAndJustificationsForChangingProjectPlan };
      obs$ = this._changePlanApprovalService.processConsultantNotes(dto);
    } else {
      const dto: ProcessAccountantNotesDto = { id, totalProjectCosts: v.totalProjectCosts, latestBankStatementFileId: v.latestBankStatementFileId };
      obs$ = this._changePlanApprovalService.processAccountantNotes(dto);
    }
    this.subscriptions.push(obs$.subscribe({
      next: res => {
        this.isSaving = false;
        if (res.isDone) { this.isProcessingMode = false; this.loadDetails(); }
      },
      error: () => { this.isSaving = false; },
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
