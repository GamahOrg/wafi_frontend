import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { fileUploader } from 'src/app/core/interceptors/headers-handler/headers-handler.interceptor';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { BaseResponse } from '../../models/base-response';

@Injectable()
export class FileManagementService {
  constructor(private _httpClient: HttpClient, private toasterService: ToastrNotificatioService) { }

  UploadMultiple(files: any) {
    let myFormData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files.item(i)
      // console.log("file",file)
      myFormData.append('Files', file, file.name);
    }
    // console.log("getAll('Files')", myFormData.getAll('Files'))
    return this._httpClient.post(Configuration.APIs.FileManagment.UploadMultiple, myFormData,
      {
        context: new HttpContext().set(fileUploader, true ),
        observe: 'events',
      }

    ).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


  DeletFile(id : string): Observable<BaseResponse<any>>{
     return this._httpClient.delete<BaseResponse<any>>(`${Configuration.APIs.FileManagment.DeletFile}/${id}`)

  }

}
