import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysProblemStatusDto } from '../dataModels/sys-problem-status-dto';
import { SysLevelTypeDto } from '../dataModels/license-project-problem-paging-dto';
import { SysContinuityDto, SysLicenseProjectRiskTypeDto, SysOwnerTypeDto, SysResponsiblePartyDto, SysRiskStatusDto } from '../dataModels/license-project-risk-dto';

@Injectable()
export class LookupEngineeringManagementService {

  constructor(private _httpClient : HttpClient) {}
/* 
  getSysQualityNoticeNoteType() :Observable<SysQualityNoticeNoteTypeDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysQualityNoticeNoteTypeDto[]>>(`${Configuration.APIs.SysQualityNoticeNoteType.Get}`).pipe(
      map((res: CoreResponseDTO<SysQualityNoticeNoteTypeDto[]>)=>{
        return res.isDone? res.data as SysQualityNoticeNoteTypeDto[]:null;
  
      })
    );
   }
   getSysCorrectiveActionTaken() :Observable<SysCorrectiveActionTakenDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysCorrectiveActionTakenDto[]>>(`${Configuration.APIs.SysCorrectiveActionTaken.Get}`).pipe(
      map((res: CoreResponseDTO<SysCorrectiveActionTakenDto[]>)=>{
        return res.isDone? res.data as SysCorrectiveActionTakenDto[]:null;
  
      })
    );
   } */

/*    getSysQualityNoticeRelatedNoteType() :Observable<SysQualityNoticeRelatedNoteTypeDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysQualityNoticeRelatedNoteTypeDto[]>>(`${Configuration.APIs.SysQualityNoticeRelatedNoteType.Get}`).pipe(
      map((res: CoreResponseDTO<SysQualityNoticeRelatedNoteTypeDto[]>)=>{
        return res.isDone? res.data as SysQualityNoticeRelatedNoteTypeDto[]:null;
  
      })
    );
   } */





  getSysProblemStatus() :Observable<SysProblemStatusDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysProblemStatusDto[]>>(`${Configuration.APIs.SysStatusIssueType.Get}`).pipe(
      map((res: CoreResponseDTO<SysProblemStatusDto[]>)=>{
        return res.isDone? res.data as SysProblemStatusDto[]:null;
  
      })
    );
   }
   getSysLevelType() :Observable<SysLevelTypeDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysLevelTypeDto[]>>(`${Configuration.APIs.SysLevelType.Get}`).pipe(
      map((res: CoreResponseDTO<SysLevelTypeDto[]>)=>{
        return res.isDone? res.data as SysLevelTypeDto[]:null;
  
      })
    );
   }

   getSysContinuities() :Observable<SysContinuityDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysContinuityDto[]>>(`${Configuration.APIs.SysContinuities.GetSysContinuities}`).pipe(
      map((res: CoreResponseDTO<SysContinuityDto[]>)=>{
        return res.isDone? res.data as SysContinuityDto[]:null;
  
      })
    );
   }
   getSysLicenseProjectRiskTypes() :Observable<SysLicenseProjectRiskTypeDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysLicenseProjectRiskTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectRiskType.GetSysLicenseProjectRiskTypes}`).pipe(
      map((res: CoreResponseDTO<SysLicenseProjectRiskTypeDto[]>)=>{
        return res.isDone? res.data as SysLicenseProjectRiskTypeDto[]:null;
  
      })
    );
   }
   getSysRiskStatus() :Observable<SysRiskStatusDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysRiskStatusDto[]>>(`${Configuration.APIs.SysRiskStatus.GetSysRiskStatus}`).pipe(
      map((res: CoreResponseDTO<SysRiskStatusDto[]>)=>{
        return res.isDone? res.data as SysRiskStatusDto[]:null;
  
      })
    );
   }
   GetSysResponsibleParties() :Observable<SysResponsiblePartyDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysResponsiblePartyDto[]>>(`${Configuration.APIs.SysResponsibleParty.GetSysResponsibleParties}`).pipe(
      map((res: CoreResponseDTO<SysResponsiblePartyDto[]>)=>{
        return res.isDone? res.data as SysResponsiblePartyDto[]:null;
  
      })
    );
   }
   getSysOwnerTypes() :Observable<SysOwnerTypeDto[]|null>{
    return this._httpClient.get<CoreResponseDTO<SysOwnerTypeDto[]>>(`${Configuration.APIs.SysOwnerType.GetSysOwnerTypes}`).pipe(
      map((res: CoreResponseDTO<SysOwnerTypeDto[]>)=>{
        return res.isDone? res.data as SysOwnerTypeDto[]:null;
  
      })
    );
   }
}
