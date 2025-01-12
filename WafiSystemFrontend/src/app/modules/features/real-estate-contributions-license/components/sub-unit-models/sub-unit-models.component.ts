import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectModelDto } from '../../dataModels/license-project-model.dto';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { ProjectModelService } from '../../services/project-model.service';
import { ProjectSubUnitService } from '../../services/project-sub-unit.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectModuleModelsFormComponent } from '../project-module-models-form/project-module-models-form.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-unit-models',
  templateUrl: './sub-unit-models.component.html',
  styleUrls: ['./sub-unit-models.component.scss']
})
export class SubUnitModelsComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  selectedSubUnit:string|null = null;
  selectedSubUnitTitle:string|null = null;
  types:DropDownNameDto[] =[];
  models:LicenseProjectModelDto[] = [];
  localization = {
    title:'إضافة بيانات النموذج داخل نوع الوحدة',
    BlocksAndbuildingsAndunitsComponent: "نمازج وحدات المشروع ",
    requiredErrorMsg: 'حقل مطلوب',
    save:'حفظ البيانات',
    savedSuccessfully:'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',

  };
  constructor(
    private _projectSubUnitService: ProjectSubUnitService,
    private _projectModelService: ProjectModelService,
    private _popupService: PopupService,
    private _toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getSelectedProjectSubUnit();
    this.unitTitle();
  }

  private getSelectedProjectSubUnit(): void {
    this.subscriptions.push(
      this._projectSubUnitService.getSelectedProjectSubUnit().subscribe((res: string | null) => {
        this.selectedSubUnit= res;
        if (this.selectedSubUnit) this.loadComponentData();
      })
    );
  }

  private loadComponentData() {
    const requests = [
      this._projectModelService.GetByProjectSubUnitId(this.selectedSubUnit as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {

      if(results){
        this.models = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
        this.types = (results[1] as CoreResponseDTO<DropDownNameDto[]>).data as DropDownNameDto[];

        this._projectModelService.SetSubjectListObjs(this.models);
        this._projectModelService.getSubjectListObjs().subscribe((subjectObj) => {
          this.models = subjectObj;
        })
      }
    });
    this.subscriptions.push(subscriptions);
  }

  private unitTitle(): void {
    this.subscriptions.push(
      this._projectSubUnitService.selectedProjectSubUnitTitle.subscribe((res: string | null) => {
        
        if (res) this.selectedSubUnitTitle = res
      })
    )
  }

  openDialog(license:LicenseProjectModelDto|undefined): void {
    if(!this.selectedSubUnit) return;
    if(!license || !license.id)
    {
      license = new LicenseProjectModelDto();
      license.licenseProjectSubUnitId =this.selectedSubUnit;
    }
    this._projectModelService.SetSubjectObj(license as LicenseProjectModelDto);
     let Data={
      title: this.localization.title + " - " + this.selectedSubUnitTitle,
      component: ProjectModuleModelsFormComponent,
      id: "ProjectModuleModelsFormComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id:string){
    this.subscriptions.push(
      this._projectModelService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this._projectModelService.SetSubjectListObjs(res.data as LicenseProjectModelDto[]);
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}

