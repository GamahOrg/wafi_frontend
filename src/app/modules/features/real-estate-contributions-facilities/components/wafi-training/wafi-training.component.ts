import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { WafiTrainingDto } from '../../dataModels/wafi-training-dto';
import { WafiTrainingService } from '../../services/wafiTraining/wafi-training.service';
import { WafiTrainingFormComponent } from '../wafi-training-form/wafi-training-form.component';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-wafi-training',
  templateUrl: './wafi-training.component.html',
  styleUrls: ['./wafi-training.component.scss']
})
export class WafiTrainingComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  wafiTraining: WafiTrainingDto|null = null;
  userData: customerResponse | null = null;

  constructor(private _service: WafiTrainingService,
    private _userDataService: UserDataService, private _popupService: PopupService,
    private  _filemangementService : FileManagementService) { }


  ngOnInit() {
    this.obseveCustomerData();
    this.observeCurrentObj();
    this.observieWafiTrainingOb();
  }
  
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.GetByFacilityId();
        }
      })
    )
  }

  deletFile(id : string){
    this._filemangementService.DeletFile(id).subscribe(res=>{
      if(res.isDone){
        this.GetByFacilityId();      }
    })
  }

  GetByFacilityId() {
    this.subscriptions.push(
      //this.userData?.Id as string
      this._service.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe((res: WafiTrainingDto|null) => {
      
          // this.wafiTraining = res;
          this._service.SetSubjectObj(res);
        
      })
    )
  }
  observieWafiTrainingOb() {
    this.subscriptions.push(
      this._service.getSubjectObj().subscribe((res: WafiTrainingDto|null) => {
        this.wafiTraining = res;
      })
    );
  }
  openDialog(): void {
    let Data = {
      panelClass: ['rega'],
      title: "تدريب الهيئة العامة للعقار للبيع على الخارطة",
      component: WafiTrainingFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    // dialogRef.afterClosed().subscribe(_=> this.observeCurrentObj());
  }
  observeCurrentObj(): void {
    this.subscriptions.push(
      this._service.getSubjectObj().subscribe((subjectObj) => {
        this.wafiTraining = subjectObj;
      })
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
