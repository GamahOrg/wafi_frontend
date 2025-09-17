import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { timelinefilesModel } from '../../dataModels/timelinefiles/timelinefiles.model';
import { LicenseTimelineProgramDto, addNoteModel } from '../../dataModels/filesdata/filesdata.model';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable()
export class TimelinefilesService {
  timeshecduledDetails$: BehaviorSubject<LicenseTimelineProgramDto> = new BehaviorSubject<LicenseTimelineProgramDto>({} as LicenseTimelineProgramDto);
  returnToList: EventEmitter<any> = new EventEmitter();
  showDate:boolean = false;
  submitSuccessfullyEventEmitter : EventEmitter<string> = new EventEmitter()
   showtimelineDetails = new EventEmitter<string>();

  constructor(private _httpClient : HttpClient) { }

  getLicenseTimelneProgramByID(id : string) :Observable<LicenseTimelineProgramDto>{
    return this._httpClient.get<CoreResponseDTO<LicenseTimelineProgramDto>>(`${Configuration.APIs.TimeLineProgramFiles.getById}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseTimelineProgramDto>)=>{
        this.updateTimeShecduledData(res.data as LicenseTimelineProgramDto)
        return res.data as LicenseTimelineProgramDto;
      })
    );
  }

  updateTimeShecduledData(data : LicenseTimelineProgramDto){
    this.timeshecduledDetails$.next(data)
  }

  GetMainLicenseProjectTimeSchedule(id : string | null) :Observable<LicenseTimelineProgramDto>{
    return this._httpClient.get<CoreResponseDTO<LicenseTimelineProgramDto>>(`${Configuration.APIs.TimeLineProgramFiles.GetMainLicenseProjectTimeSchedule}/${id}`).pipe(
      map((res: CoreResponseDTO<LicenseTimelineProgramDto>)=>{
        if(res.isDone)
          return res.data as LicenseTimelineProgramDto;
        else
          return {} as LicenseTimelineProgramDto
      })
    );
  }

  GetLicenseProjectTimeSchedules(id : string | null, pageIndex: number, pageSize: number) :Observable<Pagination<LicenseTimelineProgramDto[]> | null>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if(id)
      queryParams = queryParams.append("licenseProjectId",  id);

    return this._httpClient.get<CoreResponseDTO<Pagination<LicenseTimelineProgramDto[]>>>(`${Configuration.APIs.TimeLineProgramFiles.GetLicenseProjectTimeSchedules}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<LicenseTimelineProgramDto[]>>)=>{
        if(res.isDone) return res.data as Pagination<LicenseTimelineProgramDto[]>;
        else return {} as Pagination<LicenseTimelineProgramDto[]>
      })
    );
  }

  CreateAsync(model: timelinefilesModel): Observable<CoreResponseDTO<timelinefilesModel>> {
   return this._httpClient.post<CoreResponseDTO<timelinefilesModel>>(`${Configuration.APIs.TimeLineProgramFiles.CreateAsync}`, model);  
  }

  CompileAsync(model: timelinefilesModel): Observable<CoreResponseDTO<timelinefilesModel>> {
    return this._httpClient.post<CoreResponseDTO<timelinefilesModel>>(`${Configuration.APIs.TimeLineProgramFiles.CompileAsync}`, model);
  }

  GetResponsibleEngineerList(id : string): Observable<CoreResponseDTO<string>>{
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.TimeLineProgramFiles.GetResponsibleEngineerList}/${id}`);
  }

  GetTimeScheduleMonthList(id : string | null): Observable<CoreResponseDTO<string[]>>{
    return this._httpClient.get<CoreResponseDTO<string[]>>(`${Configuration.APIs.TimeLineProgramFiles.GetTimeScheduleMonthList}/${id}`);
  }

}
