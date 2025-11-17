import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { Button } from '../../models/button.model';
import { ButtonType } from '../../models/enums/button-type.model';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements AfterViewInit{

  @Input() title:string = "لا توجد بيانات مدخلة";
  @Input() showText:boolean = true;
  @Input() text:string = "يُمكنك ملء البيانات لمساعدتك في إرسال طلباتك الخاصة.";
  
  @Input() showCompleteBtn:boolean = true;
  @Input() completeBtnTitle:string = "إستكمال البيانات";
  
  @Output() onNoDataButtonClicked: EventEmitter<null> = new EventEmitter<null>();
  
  @Input() noDataActionsButtons: Button[] = [
    // {
    //   icon: "",
    //   title: "إلغاء",
    //   actionType: ButtonType.custome,
    //   isVisable: true,
    //   isDisables: false,
    //   onclick: () => this.openNotesDialog()
    // },
  ]
  ngAfterViewInit(): void {
    console.log("noDataActionsButtons", this.noDataActionsButtons)
  }
  noDataButtonClicked() {
    this.onNoDataButtonClicked.emit(null)
  }
}
