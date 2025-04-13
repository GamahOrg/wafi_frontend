import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualifiedEngineersDto } from '../../dataModels/qualified-engineers-dto';
import { QualificatedEngineerService } from '../../services/QualificationQualificatedEngineer/qualificated-engineer.service';
import { EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent } from '../engineers-with-sufficient-training-for-the-engineering-consultant-form/engineers-with-sufficient-training-for-the-engineering-consultant-form.component';
import { environment } from 'src/environments/environment';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';

@Component({
  selector: 'app-engineers-with-sufficient-training-for-the-engineering-consultant',
  templateUrl: './engineers-with-sufficient-training-for-the-engineering-consultant.component.html',
  styleUrls: ['./engineers-with-sufficient-training-for-the-engineering-consultant.component.scss']
})
export class EngineersWithSufficientTrainingForTheEngineeringConsultantComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  models: any[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _userDataService: UserDataService,
    private _qualificatedEngineerService: QualificatedEngineerService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this._qualificatedEngineerService.getQualifiedEngineerlist().subscribe((list) => {
      this.models = list;
    });
  }

  // deletFile(id: string) {
  //   this._filemangementService.DeletFile(id).subscribe(res => {
  //     if (res.isDone) {
  //       this._qualificatedEngineerService.getQualifiedEngineerlist().subscribe((list) => {
  //         this.models = list;
  //       });
  //     }
  //   })

  // }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetByFacilityId()
        }
      })
    )
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this._qualificatedEngineerService.GetFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        this.models = res as QualifiedEngineersDto[];
      })
    )
  }

  delete(id: string) {
    this.subscriptions.push(
      this._qualificatedEngineerService.Delete(id).subscribe(res => {
        if (res.isDone)
          this.GetByFacilityId();
      })
    )
  }

  openDialog(id: string): void {
    if (id) {
      let eng = this.models.filter(x => x.id == id)[0] as QualifiedEngineersDto;
      this._qualificatedEngineerService.SetFQualifiedEngineerObj(eng);
    }
    let Data = {
      title: "مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي",
      component: EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
