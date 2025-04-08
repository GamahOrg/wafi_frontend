import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectOwnerDeedDto, ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { environment } from 'src/environments/environment';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';

@Component({
  selector: 'app-show-owner-list',
  templateUrl: './show-owner-list.component.html',
  styleUrls: ['./show-owner-list.component.scss']
})
export class ShowOwnerListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectLandDeed: ProjectLandDeedDto = new ProjectLandDeedDto();
  licenseProjectOwnerDeeds: LicenseProjectOwnerDeedDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  showValidation: boolean = false;
  localization = {
    title: 'عرض ملاك الصك ',
    deedData: 'بيانات الصك',
    typeId: 'نوع مالك الأرض',
    nationalId: 'رقم هوية مالك الصك / مالك منٝعتها',
    CRA: 'رقم السجل التجاري',
    name: 'اسم مالك الصك /مالك منفعتها',
    mobileNumber: 'رقم جوال مالك الصك /مالك منفعتها',
    agreementFileId: ' الاتفاقية بين المطور عقاري ومالك الأرض',
  };

  constructor(private _projectLandDeedService: ProjectLandDeedService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  ngOnInit() {
    this.loadComponentData();
  }

  private loadComponentData() {
    this.subscriptions.push(
      this._projectLandDeedService.getSubjectObj().subscribe((subjectObj) => {
        this.projectLandDeed = subjectObj;
        this.licenseProjectOwnerDeeds = this.projectLandDeed.licenseProjectOwnerDeeds;
      }))
  }
}



