import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeLicenseProjectAccountantRequestDataComponent } from '../../../components/change-license-project-accountant-request-data/change-license-project-accountant-request-data.component';

@Component({
  selector: 'app-create-change-license-project-accountant-request',
  templateUrl:
    './create-change-license-project-accountant-request.component.html',
  styleUrls: [
    './create-change-license-project-accountant-request.component.scss',
  ],
})
export class CreateChangeLicenseProjectAccountantRequestComponent
  implements OnDestroy
{
  @Input() hideDraftButton = false;
  @Input() showNextButton = true;
  @Input() showNotesPage = false;
  handleNotes = false;
  subscriptions: Subscription[] = [];
  activeTab: 'request-data' | 'agreement-data' = 'request-data';
  agreementTabEnabled = false;

  @ViewChild(ChangeLicenseProjectAccountantRequestDataComponent)
  requestDataComponent!: ChangeLicenseProjectAccountantRequestDataComponent;

  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {
    this.handleNotes = history.state?.handleNotes ?? false;
  }

  onCancel(): void {
    this._location.back();
  }

  onSaveDraft(): void {
    if (this.activeTab === 'request-data' && this.requestDataComponent) {
      this.subscriptions.push(
        this.requestDataComponent.save(true).subscribe()
      );
    }
  }

  onNext(): void {
    if (this.activeTab === 'request-data' && this.requestDataComponent) {
      this.subscriptions.push(
        this.requestDataComponent.save(false).subscribe((success) => {
          if (success) {
            this.agreementTabEnabled = true;
            this.activeTab = 'agreement-data';
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
