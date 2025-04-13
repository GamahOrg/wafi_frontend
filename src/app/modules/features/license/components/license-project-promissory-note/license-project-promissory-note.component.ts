import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectPromissoryNoteDto, LicenseProjectPromissoryNotePowerOfAttorneyDto } from '../../dataModels/license-project-promissory-note.model';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-promissory-note',
  templateUrl: './license-project-promissory-note.component.html',
  styleUrls: ['./license-project-promissory-note.component.scss']
})
export class LicenseProjectPromissoryNoteComponent implements OnInit, OnDestroy {
  licenseProjectPromissoryNote!: LicenseProjectPromissoryNoteDto;
  licenseProjectPromissoryNotePowerOfAttorneies!: LicenseProjectPromissoryNotePowerOfAttorneyDto;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  constructor(private _licenseDetailService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.getLicenseProjectRelativeWeightList();
  }

  getLicenseProjectRelativeWeightList(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectPromissoryNotes$.subscribe((res: LicenseProjectPromissoryNoteDto[] | null) => {
        if (res) {
          this.licenseProjectPromissoryNote = res[0] as LicenseProjectPromissoryNoteDto;
          this.licenseProjectPromissoryNotePowerOfAttorneies = this.licenseProjectPromissoryNote.
            licenseProjectPromissoryNotePowerOfAttorneies[0] as LicenseProjectPromissoryNotePowerOfAttorneyDto;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
