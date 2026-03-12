import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QualificationCertifiedEngineerCourseDto } from '../../dataModels/qualification-certified-engineer-course-dto';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-certified-engineer-courses-preview',
  templateUrl: './certified-engineer-courses-preview.component.html',
  styleUrls: ['./certified-engineer-courses-preview.component.scss']
})
export class CertifiedEngineerCoursesPreviewComponent implements OnInit, OnDestroy {
  courses: QualificationCertifiedEngineerCourseDto[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _certifiedEngineerService: CertifiedEngineerService,
    private _popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._certifiedEngineerService.getCertifiedEngineerObj().subscribe(eng => {
        if (eng && eng.id) {
          this.loadCourses(eng.id);
        }
      })
    );

    this.subscriptions.push(
      this._popupService.cancelAction.subscribe(() => {
        this._popupService.dismissDialog();
      })
    );
  }

  loadCourses(qualificationCertifiedEngineerId: string): void {
    this.subscriptions.push(
      this._certifiedEngineerService.GetQualificationCertifiedEngineerCourse(qualificationCertifiedEngineerId).subscribe(res => {
        this.courses = res ?? [];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
