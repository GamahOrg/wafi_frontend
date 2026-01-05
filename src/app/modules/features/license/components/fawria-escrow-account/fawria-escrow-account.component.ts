import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectService } from '../../../license-project-requests/services/license-project.service';
import { EscrowAccountDto } from '../../../license-project-requests/models/license-project.model';

@Component({
  selector: 'app-fawria-escrow-account',
  templateUrl: './fawria-escrow-account.component.html',
  styleUrls: ['./fawria-escrow-account.component.scss']
})
export class FawriaEscrowAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  entity: EscrowAccountDto = <EscrowAccountDto>{};

  constructor(public datePipe: DatePipe,
    public appService: LicenseProjectService,
    public formGroup: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {
  }

  ngOnInit() {   
    this.getLicenseProjectIdStorage();
  }
  
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId)
      this.onGet()
  }

  onGet() {
    this.appService.getEscrowAccount(this.licenseProjectId as string).subscribe((result) => {
        if (result) {
          this.entity = result;
      }
    });
  }
  

  
    // typeCode: string | null = null;
    // // licenseProjectId: string | null = null;
    // verify() {
    //   let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    //   if (!licenseProjectId) return;
    //   this.subscriptions.push(
    //     this._licenseRequestService.SendFawriaLicenseByProjectId(licenseProjectId, [TabCode.fawriaEngineeringSupervisionStaff]).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
    //       if (res) {
    //         if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
    //           this.typeCode = res.typeCode
    //           this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
    //           this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
    //           this._toastrNotificationService.showSuccess('تم الحفظ والتحقق بنجاح')
    //           this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
    //           // this.openConfirmaDialog(res.requestCode as string);
    //         } else {
    //           this.updateRequestValidation(res as RequestValidation);
    //           this.openValidationDialog();
    //         }
    //       }
    //     })
    //   )
    // }
  
    // private updateRequestValidation(data: RequestValidation) {
    //   this._licenseRequestService.updateRequestValidation(
    //     data as RequestValidation
    //   );
    // }
  
    // openConfirmaDialog(res: string): void {
    //     // Check if it's a fawria license type
    //   if (this.typeCode === 'FSRSU') {
    //   // Show regular success popup
    //     let Data = {
    //       imagePath: 'assets/images/auth/ForgotPass.svg',
    //       title: 'تم إرسال الطلب بنجاح !',
    //       staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
    //       dynamicMessage: res,
    //       buttonText: 'متابعة طلبك',
    //       buttonLink: '',
    //     } as notePopupData;
    //     this._popupService.updateNotePopupData(Data);
    //   }
    // }
  
    // openValidationDialog(): void {
    //   let Data = {
    //     title:`التحقق من بيانات المشروع`,
    //     component: LicenseRequestValidationPopupComponent,
    //     id: "LicenseRequestValidationPopupComponent",
    //     buttons: [
    //       {
    //         icon: "",
    //         title: "إلغاء",
    //         actionType: ButtonType.cancel,
    //         isVisable: true,
    //         isDisables: false,
    //         // onclick: () => this.openNotesDialog()
    //       },
    //       {
    //         icon: "",
    //         title: "إستكمال البيانات",
    //         actionType: ButtonType.confirm,
    //         isVisable: true,
    //         isDisables: false,
    //         // onclick: () => this.openAssignEmployeeDialog()
    //       },
    //     ]
    //   } as PopupData;
    //   this._popupService.updatePopupData(Data);
    // }
      
    // // TabsButtons
    // updateSveAsDraftBtnIsvisible():void{
    //   this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
    // }
  
    // private observeNextButtonIsCliced() {
    //   this.subscriptions.push(
    //     this._nextAndPreviusButtonsService.verifyIsClicked.subscribe(
    //       (res: null) => {
    //         this.save(false, true);
    //       }
    //     )
    //   );
    //   this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
    //   this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
    //   this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(true);
    //   this._nextAndPreviusButtonsService.verifyBtnText.next('تحقق وحفظ  كادر الاشراف الهندسي');
    // }
  
    // private observeSaveAsDraftIsClicked() {
    //   this.subscriptions.push(
    //     this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
    //       this.save()
    //     })
    //   )
    // }
  
    // private observeTabsButtons(): void {
    //   this.observeNextButtonIsCliced();
    //   this.observeSaveAsDraftIsClicked()
    // }
  
    // private moveToNextTab(): void {
    //   this._nextAndPreviusButtonsService.moveToNextTab.emit()
    // }

  // End Of Methods

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
