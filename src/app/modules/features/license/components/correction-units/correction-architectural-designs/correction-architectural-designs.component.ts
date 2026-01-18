import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ArchitecturalDesignFilesDto } from '../../../dataModels/architectural-design-files.dto';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseRequestService } from '../../../services/license-request.service';
import {
  RequestValidation,
  RequestSuccessResponse,
} from '../../../dataModels/request-validation.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import {
  notePopupData,
  PopupData,
  confirmationPopupData,
} from 'src/app/shared/models/popup.model';
import { CorrectionLicenseRequestValidationPopupComponent } from '../correction-license-request-validation-popup/correction-license-request-validation-popup.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { TabCode } from '../../../models/tab-code.model';
import { LicenseNatureTypeEnum } from '../../../enums/license-nature-type';
import { LicenseProjectNatureTypeDto } from '../../../models/project-units';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectCompletionData } from '../../../dataModels/license-project-model.dto';
import { CorrectionArchitecturalDesignFilesService } from '../../../services/licenseProjects/correction-architectural-design-files.service';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionLicenseProjectPlanAccordingApprovedStandardsFileService } from '../../../services/licenseProjects/correction-license-project-plan-according-approved-standards-file.service';

@Component({
  selector: 'app-correction-architectural-designs',
  templateUrl: './correction-architectural-designs.component.html',
  styleUrls: ['./correction-architectural-designs.component.scss'],
})
export class CorrectionArchitecturalDesignsComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];
  architecturalDesign: ArchitecturalDesignFilesDto =
    new ArchitecturalDesignFilesDto();
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  requestId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  isExistingValidation: boolean = false;
  dataConfirmationChecked: boolean = false;
  userData: customerResponse | null = null;
  isTabCompleted: boolean = false;

  constructor(
    private _architecturalDesignFilesService: CorrectionArchitecturalDesignFilesService,
    private _planFilesService: CorrectionLicenseProjectPlanAccordingApprovedStandardsFileService,
    private _toastrService: ToastrService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _userDataService: UserDataService,
    private _licenseRequestService: LicenseRequestService,
    private _popupService: PopupService,
    private _projectUnitService: CorrectionLicenseProjectUnitService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}

  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  ngOnInit() {
    this.getCorrectionUnitRequestIdFromLocalStorage();
    this.getCustomerData();
    this.getLicenseProjectIdStorage();
    this.checkIfTabIsCompleted();
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSveAsDraftBtnIsvisible();
  }

  isProjectHasUnitForFarzIntegration: boolean = false;
  GetIsProfileCompleted() {
    this.subscriptions.push(
      this._licenseRequestService
        .GetLicenseProjectCompletionData(this.licenseProjectId as string)
        .subscribe((res: LicenseProjectCompletionData | null) => {
          if (res)
            this.isProjectHasUnitForFarzIntegration =
              res.isProjectHasUnitForFarzIntegration;
        })
    );
  }

  private checkIfTabIsCompleted(): void {
    const typeCode =
      this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {
      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(
          this.licenseProjectId
        ),
        this._licenseRequestService.GetLicenseProjectCompletionData(
          this.licenseProjectId
        ),
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;

          if (completedTabs && complete)
            this.isTabCompleted =
              completedTabs.includes(
                TabCode.fawriaArchitecturalUnitsAndDesigns
              ) &&
              complete &&
              (complete.isProfileCompleted ||
                complete.isProjectHasUnitForFarzIntegration);
          if (this.isTabCompleted) {
            this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
            this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
            this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(
              false
            );
            this.subscriptions.push(
              this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
                () => {
                  this.moveToNextTab();
                }
              )
            );
          }
        }
      });

      this.subscriptions.push(subscriptions);
    }
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.GetIsProfileCompleted();
  }

  private getCorrectionUnitRequestIdFromLocalStorage(): void {
    this.requestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
    this.GetIsProfileCompleted();
  }

  getCustomerData() {
    this._userDataService
      .getCustomerData()
      .subscribe((res: customerResponse | null) => {
        this.userData = res;
        this.isExistingValidation = this.userData?.isEmployee as boolean;
      });
  }

  localization = {
    title: 'التصاميم المعمارية والمخططات الهندسية',
    licenseProjectPlanAccordingApprovedStandardsFiles:
      'مخططات المشروع وفق المعايير المعتمدة',
    licenseProjectDesignFiles: 'التصاميم المعمارية والمخططات الهندسية',
    savedSuccessfully: 'تم الحفظ',
    requiredErrorMsg: 'حقل مطلوب',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    dataConfirmationRequired: 'يجب الموافقة على إقرار صحة البيانات المدخلة',
  };

  private loadComponentData() {
    const requests = [
      this._architecturalDesignFilesService.GetDesignFilesByLicenseProjectId(
        this.requestId as string
      ),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.architecturalDesign = results[0].data as ArchitecturalDesignFilesDto;
    });
    this.subscriptions.push(subscriptions);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
    this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
  }

  DeleteDesignFile(id: string) {
    this.subscriptions.push(
      this._architecturalDesignFilesService
        .DeleteDesignFile(id)
        .subscribe((res) => {
          console.log('res:DeleteDesignFile', res);

          this.architecturalDesign.licenseProjectDesignFiles =
            this.architecturalDesign.licenseProjectDesignFiles.filter(
              (x) => x.designFileId != id
            );
        })
    );
  }
  DeletePlanFile(id: string) {
    this.subscriptions.push(
      this._planFilesService.DeletePlanFile(id).subscribe((res) => {
        console.log('res:DeletePlanFile', res);

        this.architecturalDesign.licenseProjectPlanAccordingApprovedStandardsFiles =
          this.architecturalDesign.licenseProjectPlanAccordingApprovedStandardsFiles.filter(
            (x) => x.planFileId != id
          );
      })
    );
  }

  onApprovedStandardsFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.architecturalDesign.licenseProjectPlanAccordingApprovedStandardsFiles.push(
        {
          planFileId: data.id,
          licenseProjectsId: this.licenseProjectId
            ? this.licenseProjectId
            : '00000000-0000-0000-0000-000000000000',
          id: '00000000-0000-0000-0000-000000000000',
          planFile: null,
          isPrevious: false,
          requestId: this.requestId
            ? this.requestId
            : '00000000-0000-0000-0000-000000000000',
        }
      );
    });
  }

  onDesignFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.architecturalDesign.licenseProjectDesignFiles.push({
        designFileId: data.id,
        licenseProjectId: this.licenseProjectId
          ? this.licenseProjectId
          : '00000000-0000-0000-0000-000000000000',
        requestId: this.requestId
          ? this.requestId
          : '00000000-0000-0000-0000-000000000000',
        id: '00000000-0000-0000-0000-000000000000',
        designFile: null,
        isPrevious: false,
      });
    });
  }

  save(moveToNextTab: boolean = false, verify: boolean = false): void {
    if (!this.isExistingValidation) {
      if (
        !this.architecturalDesign.licenseProjectDesignFiles ||
        !this.architecturalDesign.licenseProjectDesignFiles.length ||
        !this.architecturalDesign
          .licenseProjectPlanAccordingApprovedStandardsFiles ||
        !this.architecturalDesign
          .licenseProjectPlanAccordingApprovedStandardsFiles.length
      ) {
        this.showValidation = true;
        this._toastrNotificatioService.showError(
          this.localization.PleaseAddAllRequiredFields
        );
        return;
      }
      if (!this.dataConfirmationChecked && this.isFawriaValidation()) {
        this.showValidation = true;
        this._toastrNotificatioService.showError(
          this.localization.dataConfirmationRequired
        );
        return;
      }
    }

    if (!this.architecturalDesign.id)
      this.architecturalDesign.id = '00000000-0000-0000-0000-000000000000';
    this.architecturalDesign.requestId = this.requestId
      ? this.requestId
      : '00000000-0000-0000-0000-000000000000';

    this.subscriptions.push(
      this._architecturalDesignFilesService
        .SaveDesignFilesForProjectLicenseAsync(this.architecturalDesign)
        .subscribe((res) => {
          if (res.isDone && !verify) {
            this._toastrService.success(this.localization.savedSuccessfully);
            this.architecturalDesign = res.data as ArchitecturalDesignFilesDto;
            this._licenseRequestService.updatedCompletePercentage.emit();
            // if (moveToNextTab) this.moveToNextTab();
            // this.loadComponentData();
          } else if (res.isDone && verify) {
            this.architecturalDesign = res.data as ArchitecturalDesignFilesDto;
            this.verify();
          } else this._toastrService.error(res.message);
        })
    );
  }

  typeCode: string | null = null;
  verify() {
    let licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService
        .SendFawriaLicenseByProjectId(licenseProjectId, [
          TabCode.fawriaArchitecturalUnitsAndDesigns,
        ])
        .subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
              this.typeCode = res.typeCode;
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                res.licenseProjectId
              );
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.id
              );
              this._toastrService.success('تم الحفظ والتحقق بنجاح');

              this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
              this._licenseRequestService.updatedCompletePercentage.emit();
              this.moveToNextTab();
            } else {
              const tabcodes: string[] = [
                TabCode.fawriaLicenseProjectZone,
                TabCode.fawriaLicenseProjectModel,
                TabCode.fawriaLicenseProjectCodes,
                TabCode.fawriaLicenseProjectDesign,
              ];
              this._dataVisibilityOfLicenseProjectService.updateTabCodesHasValidtionError(
                tabcodes
              );
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        })
    );
  }

  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }

  natureTypeId: number | null = null;
  dialogMessage: string = '';
  GetLicenseProjectNatureType() {
    this.subscriptions.push(
      this._projectUnitService
        .GetLicenseProjectNatureType(this.licenseProjectId as string)
        .subscribe((res: LicenseProjectNatureTypeDto | null) => {
          this.natureTypeId = res?.natureTypeId as number;
          if (
            this.natureTypeId != null &&
            this.natureTypeId == LicenseNatureTypeEnum.Units
          ) {
            if (!this.isProjectHasUnitForFarzIntegration) this.save(true, true);
            else
              this.dialogMessage =
                'هل أنت متأكد من إرسال بيانات الوحدات إلى منصة فرز؟ بعد الإرسال، قد يتم تقييد التعديل على البيانات عند قبول طلب الفرز.';
          } else if (
            this.natureTypeId != null &&
            this.natureTypeId == LicenseNatureTypeEnum.Lands
          ) {
            this.save(true, true);
          }
          if (this.isProjectHasUnitForFarzIntegration) {
            this.openDialog();
          }
        })
    );
  }

  openDialog(): void {
    let Data = {
      popupType: 'primary',
      title: '',
      staticMessage: this.dialogMessage,
      dynamicMessage: '',
      acceptButtonText: 'تأكيد إرسال البيانات',
    } as confirmationPopupData;
    const dialogRef = this._popupService.updateConfirmationPopupData(Data);

    const confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.save(false, true);
      dialogRef.close();
      confirmSub.unsubscribe();
    });

    dialogRef.afterClosed().subscribe(() => {
      confirmSub.unsubscribe();
    });
  }

  openConfirmaDialog(res: string): void {
    if (this.typeCode === 'FSRSU') {
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم إرسال الطلب بنجاح !',
        staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
        dynamicMessage: res,
        buttonText: 'متابعة طلبك',
        buttonLink: '',
      } as notePopupData;
      this._popupService.updateNotePopupData(Data);
    }
  }

  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: CorrectionLicenseRequestValidationPopupComponent,
      id: 'CorrectionLicenseRequestValidationPopupComponent',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  isFawriaValidation(): boolean {
    const typecode =
      this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU') return true;
    else return false;
  }

  updateSveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }

  private observeNextButtonIsCliced() {
    if (this.isFawriaValidation()) {
      if (this.isTabCompleted) {
        this.subscriptions.push(
          this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
            (res: null) => {
              this.moveToNextTab();
            }
          )
        );
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      } else {
        this.subscriptions.push(
          this._nextAndPreviusButtonsService.verifyIsClicked.subscribe(
            (res: null) => {
              this.GetLicenseProjectNatureType();
            }
          )
        );
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnText.next(
          'تحقق وحفظ الوحدات والتصاميم المعمارية'
        );
      }
    } else {
      this.subscriptions.push(
        this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
          (res: null) => {
            this.save(true, false);
          }
        )
      );
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
      this._nextAndPreviusButtonsService.saveAsDraftBtnText.next('حفظ');
    }
  }

  private observeSaveAsDraftIsClicked() {
    this
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.save();
        }
      )
    );
  }

  private observeTabsButtons(): void {
    this.isFawriaValidation();
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
