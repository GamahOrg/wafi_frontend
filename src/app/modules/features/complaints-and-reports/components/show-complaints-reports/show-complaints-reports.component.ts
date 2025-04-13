import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComplaintRequestDto } from '../../models/complaint-request-dto';
import { ComplaintsReportsService } from '../../services/complaints-reports.service';
import { ComplaintRequestCustomerPagingList } from '../../models/complaint-request-customer-paging-list';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-complaints-reports',
  templateUrl: './show-complaints-reports.component.html',
  styleUrls: ['./show-complaints-reports.component.scss']
})
export class ShowComplaintsReportsComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  complaintRequest ?:ComplaintRequestDto;
  complaintRequestCustomer ?:ComplaintRequestCustomerPagingList;
  constructor( private _complaintsReportsService: ComplaintsReportsService) {
 
  }


  ngOnInit() {
    this.getComplaintRequestData();
  }


  private getComplaintRequestData(): void {
    this.subscriptions.push(
      this._complaintsReportsService.getRequest().subscribe((res: ComplaintRequestCustomerPagingList | null) => {
        this.complaintRequestCustomer = res as ComplaintRequestCustomerPagingList;
        if(this.complaintRequestCustomer)
        this.GetByComplaintRequestId();
       
      })
    )
  }
  
  private GetByComplaintRequestId(): void {
    this.subscriptions.push(
      this._complaintsReportsService
        .GetByComplaintRequestId(this.complaintRequestCustomer?.id as string)
        .subscribe((res: ComplaintRequestDto | null) => {
          if(res){
            this.complaintRequest = res as ComplaintRequestDto;
          }
        })
    );
  }


}
