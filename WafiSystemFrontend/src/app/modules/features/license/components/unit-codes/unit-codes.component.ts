import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectUnit } from '../../models/project-units';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectUnitCodeService } from '../../services/project-unit-code.service';
import { ProjectUnitCodeDto } from '../../dataModels/project-unit-code.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { UnitCodesFormComponent } from '../unit-codes-form/unit-codes-form.component';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-unit-codes',
  templateUrl: './unit-codes.component.html',
  styleUrls: ['./unit-codes.component.scss']
})

export class UnitCodesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitTitle: string | null = "";
  projectUnits: ProjectUnit[] = [];
  localization = {
    totalNumberOfUnitCodes: "إجمالي عدد اكواد الوحدات ",
    addingNewCode: "إضافة كود للوحدة",
    UnitNumber: "وحده رقم ",
    code: 'كود الوحدة',
    deliveryOn: 'تاريخ التسليم',
    price: 'سعر التعاقد',
    actions: 'الإجراءات',
    savedSuccessfully: 'تم الحفظ',
    deletedSuccessfully: 'تم الحذف بنجاح'
  }

  projectUnitCodes: ProjectUnitCodeDto[] = []
  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _projectUnitCodeService: ProjectUnitCodeService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getSelectedProjectUnit();
    this.getProjectUnits();
    this.unitCodeTitle();
    this.observeProjectUnitCodes()
  }

  private observeProjectUnitCodes(): void {
    this.subscriptions.push(
      this._projectUnitCodeService.getSubjectListObjs().subscribe((res: ProjectUnitCodeDto[]) => {
        this.projectUnitCodes = res
      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private getSelectedProjectUnit(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.getSelectedProjectUnit().subscribe((res: string | null) => {
        this.selectedProjectUnitId = res;
        if (this.selectedProjectUnitId) this.GetByProjectUnitId(this.selectedProjectUnitId as string)
      })
    );
  }

  private getProjectUnits(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.projectUnits.subscribe((res) => {
        this.projectUnits = res;

      })
    );
  }

  private GetByProjectUnitId(unitId: string): void {
    this.subscriptions.push(
      this._projectUnitCodeService.GetByProjectUnitId(unitId).subscribe((res) => {
        if (res && res.data) {
          // this.projectUnitCodes = res.data
          this._projectUnitCodeService.SetSubjectListObjs(res.data)
        }
      })
    )
  }

  private unitCodeTitle(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.selectedProjectUnitTitle.subscribe((res: string | null) => {
        if (res) this.selectedProjectUnitTitle = res
      })
    )
  }

  openDialog(code: ProjectUnitCodeDto | undefined): void {

    if (!code || !code.id) {
      code = new ProjectUnitCodeDto();
      code.unitId = this.selectedProjectUnitId as string;
      code.unitTypeId = this.projectUnits.filter(x => x.id == this.selectedProjectUnitId)[0]?.unitTypeId;
      this._licenseProjectUnitService.updateSelectedProjectUnit(code.unitId)
    }
    code.licenseProjectId = this.licenseProjectId as string;
    this._projectUnitCodeService.SetSubjectObj(code as ProjectUnitCodeDto);

    let Data = {
      title: this.localization.code + " - " + this.selectedProjectUnitTitle,
      component: UnitCodesFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id: string) {
    this.subscriptions.push(
      this._projectUnitCodeService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.deletedSuccessfully)
          this.projectUnitCodes = res.data as ProjectUnitCodeDto[];
        }
        else
          this._toastrNotificationService.showError(res.message);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
