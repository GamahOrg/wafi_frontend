import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectManagerNoteDto } from '../dataModels/project-manager-note-dto';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class ProjectBusinessCaseReportNoteService {

  constructor(private _httpClient : HttpClient) {}
  addNoteFromProjectManger(projectManagerNoteDto: ProjectManagerNoteDto): Observable<CoreResponseDTO<any> | null> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.ProjectBusinessCaseReportNote.AddNotesFromProjectManger, projectManagerNoteDto).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res.isDone ? res : null
        })
      )
  } 
}
