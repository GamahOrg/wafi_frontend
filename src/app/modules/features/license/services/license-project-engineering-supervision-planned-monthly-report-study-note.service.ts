import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto } from '../dataModels/license-project-engineering-supervision-planned-monthly-report-study-note-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto } from '../dataModels/license-project-engineering-supervision-planned-monthly-report-study-note-create-update-dto';

@Injectable()
export class LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService {

  constructor(private _httpClient: HttpClient) { }

  getLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList(licenseProjectId: string, monthDate: Date): Observable<LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[] | null> {
      return this._httpClient.get<CoreResponseDTO<LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[]>>(`${Configuration.APIs.LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNote.GetLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList}/${licenseProjectId}/${monthDate}`).pipe(
        map((res: CoreResponseDTO<LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[]>) => {
         
          return res.isDone ? res.data as LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[] : null
  
        })
      );
    }
   save(licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate: LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNote.SaveNoteFromCustomer, licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 
  
}
