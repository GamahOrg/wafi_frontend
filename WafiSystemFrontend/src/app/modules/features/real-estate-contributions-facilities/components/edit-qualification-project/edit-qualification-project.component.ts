import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import {
  ProjectCategoryDto,
  ProjectSubCategoryDto,
  ProjectTypeFullDto,
  ProjectTypesDto,
  QualificationProjectContractFileFullDto,
  QualificationProjectFullDto
} from '../../dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from "../../dataModels/qualificationTechnicalCapabilitiesRequirement.model";
import { FileManagementService } from '../../../../../shared/services/fileManagement/file-management.service';
import {
  TechnicalCapabilitiesRequirementsService
} from '../../services/technicalCapabilitiesRequirements/technical-capabilities-requirements.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-edit-qualification-project',
  templateUrl: './edit-qualification-project.component.html',
  styleUrls: ['./edit-qualification-project.component.scss']
})
export class EditQualificationProjectComponent implements OnInit, OnDestroy {

  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  projectDto: QualificationProjectFullDto | undefined = undefined;
  projectCategories: ProjectCategoryDto[] = [];
  projectSubCategories: ProjectSubCategoryDto[] = [];
  projectSubCategoriesFiltered: ProjectSubCategoryDto[] = [];
  projectTypes: ProjectTypeFullDto[] = [];
  selectedProjectTypes: string[] = [];
  newUploadedProjectContractFiles: QualificationProjectContractFileFullDto[] = [];

  editForm: FormGroup = new FormGroup({});
  showValidation: boolean = false;
  constructor(
    private technicalCapabilitiesRequirementsService: TechnicalCapabilitiesRequirementsService,
    private fb: FormBuilder,
    private _fileManagementService: FileManagementService,
    public toastService: ToastrNotificatioService,
    private _popupService: PopupService,) {
  }

  get controls() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    this.createEditForm();
    this.initializeComponent();
    this.observePopupEvents()
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }
  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  initializeComponent(): void {

    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.GetProjectCategory().subscribe(data => {
      this.projectCategories = data;
    }));

    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.GetProjectSubCategoryDropDown().subscribe(data => {
      this.projectSubCategories = data;

      this.subscriptions.push(this.technicalCapabilitiesRequirementsService.projectTOEdit.subscribe(data => {
        this.projectDto = data;

        if (this.projectDto && !this.projectDto.projectContractFiles) {
          this.projectDto.projectContractFiles = [];
        }

        this.projectDto?.projectsProjectTypes?.forEach(item => {
          this.selectedProjectTypes.push(item.projectTypeId!);
        })

        if (this.projectDto && this.projectDto.projectCategoryId) {
          this.filterProjectSubCategories(this.projectDto.projectCategoryId);
        }

        this.createEditForm();
      }));
    }));

    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.GetProjectTypeDropDown().subscribe(data => {
      this.projectTypes = data;
    }));
  }

  createEditForm(): void {
    this.editForm = this.fb.group({
      projectCategoryId: [this.projectDto?.projectCategoryId, [Validators.required]],
      projectSubCategoryId: [this.projectDto?.projectSubCategoryId, [Validators.required]],
      projectTypeIdsList: [this.selectedProjectTypes, [Validators.required]],
      projectName: [this.projectDto?.projectName, [Validators.required]],
      projectOwner: [this.projectDto?.projectOwner, [Validators.required]],
      executingContractor: [this.projectDto?.executingContractor, [Validators.required]],
      contractorClassification: [this.projectDto?.contractorClassification, [Validators.required]],
      projectLocation: [this.projectDto?.projectLocation, [Validators.required]],
      unitsCount: [this.projectDto?.unitsCount, [Validators.required]],
      projectArea: [this.projectDto?.projectArea, [Validators.required]],
      projectValue: [this.projectDto?.projectValue, [Validators.required]],
      startDate: [this.parseDate(this.projectDto?.startDate?.toString()), [Validators.required]],
      projectDuration: [this.projectDto?.projectDuration, [Validators.required]],
      achievementRate: [this.projectDto?.achievementRate, [Validators.required]],
      marketingStatus: [this.projectDto?.marketingStatus, [Validators.required]],
      implementationMethodology: [this.projectDto?.implementationMethodology, [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  parseDate(dateString: string | undefined): string | null {
    if (dateString) {
      return dateString.split('T')[0];
    }
    return null;
  }

  save(): void {
    if (!this.editForm.valid || !this.projectDto?.projectScheduleFileId || (this.newUploadedProjectContractFiles.length == 0 && (!this.projectDto || !this.projectDto.projectContractFiles || !this.projectDto.projectContractFiles.length))) {
      this.toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }
    const projectToEdit = this.editForm.value as QualificationProjectFullDto;

    projectToEdit.id = this.projectDto!.id;
    projectToEdit.technicalCapabilitiesRequirementsId = this.projectDto?.technicalCapabilitiesRequirementsId;
    projectToEdit.projectScheduleFileId = this.projectDto?.projectScheduleFileId;

    const projectTypeIdsList = this.editForm.get('projectTypeIdsList')?.value as string[];
    if (projectTypeIdsList && projectTypeIdsList.length > 0) {
      projectToEdit.projectsProjectTypes = [];
      projectTypeIdsList.forEach(item => {
        projectToEdit.projectsProjectTypes?.push({ projectTypeId: item } as ProjectTypesDto);
      });

    }

    projectToEdit.projectContractFiles = this.newUploadedProjectContractFiles;

    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.SaveQualificationProject(projectToEdit).subscribe(res => {
      if (res.isDone && res.data) {
        this.technicalCapabilitiesRequirementsService.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(res.data as QualificationTechnicalCapabilitiesRequirementFullDto);
        // this.popupService.closeDialog.emit();
        this.closeDialog()
      }
    }));
  }

  onProjectScheduleFileUploaded(fileRemovedData: any): void {
    this.projectDto!.projectScheduleFileId = fileRemovedData.eventRes.data[0].id
  }

  onProjectContractFilesUploaded(fileRemovedData: any): void {
    this.newUploadedProjectContractFiles.push({ fileManagerId: fileRemovedData.eventRes.data[0].id });
  }

  onProjectCategoryChange(event: any): void {
    const projectCategoryId = event.target.value;
    this.filterProjectSubCategories(projectCategoryId);
  }

  filterProjectSubCategories(projectCategoryId: string): void {
    this.editForm.get('projectSubCategoryId')?.reset();
    this.projectSubCategoriesFiltered = this.projectSubCategories.filter(x => x.projectCategoryId == projectCategoryId);
  }

}
