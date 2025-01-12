import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { FilesData, timelinefilesModel } from '../models/files-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable()
export class TimelinefilesService {

  timeshecduledDetails$: BehaviorSubject<FilesData> = new BehaviorSubject<FilesData>({} as FilesData);
  showDate:boolean = false;
  submitSuccessfullyEventEmitter : EventEmitter<string> = new EventEmitter()
   showtimelineDetails = new EventEmitter<string>();
  constructor(private _httpClient : HttpClient) { }


  getLicensetimelneProgramByID(id : string) :Observable<FilesData>{
    return this._httpClient.get<CoreResponseDTO<FilesData>>(`${Configuration.APIs.TimeLineProgramFiles.getById}/${id}`).pipe(
      map((res: CoreResponseDTO<FilesData>)=>{
        this.updateTimeShecduledData(res.data as FilesData)
        console.log('this.timeshecduledDetails$', this.timeshecduledDetails$)
        return res.data as FilesData;
  
      })
    );
   }

   updateTimeShecduledData(data : FilesData){
    this.timeshecduledDetails$.next(data)

   }

   GetMainLicenseProjectTimeSchedule(id : string | null) :Observable<FilesData>{
    return this._httpClient.get<CoreResponseDTO<FilesData>>(`${Configuration.APIs.TimeLineProgramFiles.GetMainLicenseProjectTimeSchedule}/${id}`).pipe(
      map((res: CoreResponseDTO<FilesData>)=>{
        if(res.isDone){
          return res.data as FilesData;
        }else{
          return {} as FilesData
        }
      })
    );
   }


   GetLicenseProjectTimeSchedules(id : string | null, pageIndex: number, pageSize: number) :Observable<Pagination<FilesData[]> | null>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if(id)
      queryParams = queryParams.append("licenseProjectId",  id);
    return this._httpClient.get<CoreResponseDTO<Pagination<FilesData[]>>>(`${Configuration.APIs.TimeLineProgramFiles.GetLicenseProjectTimeSchedules}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<FilesData[]>>)=>{
        if(res.isDone){
          return res.data as Pagination<FilesData[]>;
        }else{
          return {} as Pagination<FilesData[]>
        }
      })
    );
   }
 



   CreateAsync(model: timelinefilesModel): Observable<CoreResponseDTO<timelinefilesModel>> {
    return this._httpClient.post<CoreResponseDTO<timelinefilesModel>>(`${Configuration.APIs.TimeLineProgramFiles.CreateAsync}`, model);
      
  }


  CompileAsync(model: timelinefilesModel): Observable<CoreResponseDTO<timelinefilesModel>> {
    return this._httpClient.post<CoreResponseDTO<timelinefilesModel>>(`${Configuration.APIs.TimeLineProgramFiles.CompileAsync}`, model);
  }


  // addProjectManagerNote(model : addNoteModel) : Observable<CoreResponseDTO<addNoteModel>>{
  //   return this._httpClient.post<CoreResponseDTO<addNoteModel>>(`${Configuration.APIs.TimeLineProgramFiles.addProjectManagerNote}`, model);
  // }


  GetResponsibleEngineerList(id : string): Observable<CoreResponseDTO<string>>{
    return this._httpClient.get<CoreResponseDTO<string>>(`${Configuration.APIs.TimeLineProgramFiles.GetResponsibleEngineerList}/${id}`);
  }



  
  GetTimeScheduleMonthList(id : string | null): Observable<CoreResponseDTO<string[]>>{
    return this._httpClient.get<CoreResponseDTO<string[]>>(`${Configuration.APIs.TimeLineProgramFiles.GetTimeScheduleMonthList}/${id}`);
  }
}
