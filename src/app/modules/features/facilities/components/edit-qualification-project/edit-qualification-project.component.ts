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
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,) {
  }

  get controls() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    this.createEditForm();
    this.initializeComponent();
    this.observePopupEvents();
    this.observEditForm()
  }

  private observEditForm(): void {
    this.subscriptions.push(
      this.editForm.valueChanges.subscribe(value => {
        this.updateFormValidation()
      })
    )
  }

  private updateFormValidation(): void {
    console.log("updateFormValidation");
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

      this.projectTypes = this.projectTypes.map(project => ({
        id: project.id,
        typeName: project.typeName,
        selected: false
      }));
      this.projectTypes = [
        // { id: 0, name: 'لا يوجد', selected: false },
        ...this.projectTypes
      ];
      
      if (this.selectedProjectTypes && this.selectedProjectTypes.length > 0) {
        this.projectTypes.forEach(f => {
          f.selected = this.selectedProjectTypes.includes(f.id);
        });
        this.controls['projectTypeIdsList'].setValue(this.selectedProjectTypes);
      }
      //else if (this.code && this.code.id) {
      //  // EDIT case: no facilities returned → select "لا يوجد" (id = 0) by default
      //  this.facilitiesListLookup.forEach(f => {
      //    f.selected = f.id === null;
      //  });
      //  this.controls['projectTypeIdsList'].setValue([0]);
      //}
    }));
  }

  createEditForm(): void {
    this.editForm = this.fb.group({
      projectCategoryId: [this.projectDto?.projectCategoryId ?? null, [Validators.required]],
      projectSubCategoryId: [this.projectDto?.projectSubCategoryId ?? null, [Validators.required]],
      projectTypeIdsList: [this.selectedProjectTypes, [Validators.required]],
      projectName: [this.projectDto?.projectName, [Validators.required]],
      projectOwner: [this.projectDto?.projectOwner, [Validators.required]],
      executingContractor: [this.projectDto?.executingContractor],
      contractorClassification: [this.projectDto?.contractorClassification],
      projectLocation: [this.projectDto?.projectLocation, [Validators.required]],
      unitsCount: [this.projectDto?.unitsCount, [Validators.required]],
      projectArea: [this.projectDto?.projectArea, [Validators.required]],
      projectValue: [this.projectDto?.projectValue, [Validators.required]],
      startDate: [this.parseDate(this.projectDto?.startDate?.toString()), [Validators.required]],
      projectDuration: [this.projectDto?.projectDuration, [Validators.required]],
     // achievementRate: [this.projectDto?.achievementRate, [Validators.required]],
      //marketingStatus: [this.projectDto?.marketingStatus, [Validators.required]],
     // implementationMethodology: [this.projectDto?.implementationMethodology, [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  parseDate(dateString: string | undefined): Date | null {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

  save(): void {
    if (this.editForm?.invalid || !this.projectDto?.projectScheduleFileId
      && (!this.projectDto)) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.editForm?.markAllAsTouched();
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

    this.subscriptions.push(this.technicalCapabilitiesRequirementsService.SaveQualificationProject(projectToEdit).subscribe(response => {
      if (response.isDone) {
        this.technicalCapabilitiesRequirementsService.UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(response.data as QualificationTechnicalCapabilitiesRequirementFullDto);
        // this.popupService.closeDialog.emit();
        this.closeDialog()
      }
    }));
  }

  onProjectScheduleFileUploaded(fileRemovedData: any): void {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.projectDto!.projectScheduleFileId = '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.projectDto!.projectScheduleFileId = fileRemovedData.eventRes.data[0].id
  }

  onProjectContractFilesUploaded(fileRemovedData: any): void {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.newUploadedProjectContractFiles = [];
      return;
    } 
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
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
  getSelectedprojectTypesText(): string {
    const count = this.getSelectedprojectTypesCount();
    if (count === 0) {
      return 'يرجي الاختيار';
    }
    return 'يرجي الاختيار';
  }
  getSelectedprojectTypesCount(): number {
    return this.projectTypes.filter(d => d.selected).length;
  }
  getSelectedprojectTypes(): ProjectTypeFullDto[] {
    console.log("projectTypes=", this.projectTypes);
    return this.projectTypes.filter(d => d.selected);
  }
  isProjectTypeDisabled(project: ProjectTypeFullDto): boolean {
    // If "لا يوجد" (id = 0) is selected, disable all others
    const noProjectSelected = this.projectTypes.some(f => f.id === null && f.selected);
    if (noProjectSelected && project.id !== null) {
      return true;
    }

    // If any other project is selected, disable "لا يوجد" (id = 0)
    const anyOtherSelected = this.projectTypes.some(f => f.id !== null && f.selected);
    if (anyOtherSelected && project.id === null) {
      return true;
    }

    return false;
  }
  toggleProjectTypes(project: ProjectTypeFullDto): void {
    project.selected = !project.selected;

    // If selecting "لا يوجد" (id = 0), deselect all others
    if (project.id === null && project.selected) {
      this.projectTypes.forEach(f => {
        if (f.id !== null) f.selected = false;
      });
    }
    // If selecting any other facility, deselect "لا يوجد" (id = 0)
    else if (project.id !== null && project.selected) {
      const noFacility = this.projectTypes.find(f => f.id === null);
      if (noFacility) noFacility.selected = false;
    }

    this.updateProjectTypesIds();
  }
  updateProjectTypesIds(): void {
    const selectedIds = this.projectTypes
      .filter(d => d.selected)
      .map(d => d.id);
    this.controls['projectTypeIdsList'].setValue(selectedIds);
  }
  removeProjectTypes(project: ProjectTypeFullDto, event: Event): void {
    event.stopPropagation();
    project.selected = false;
    this.updateProjectTypesIds();
  }
  deletFile(id: string) {
    this._fileManagementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
      }
    })
  }

}
