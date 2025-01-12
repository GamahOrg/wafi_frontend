import { CustomerShortDto, FacilityShortDto } from "../../license/models/facility-short-dto";
import { QualificationTypeDto } from "./qualification-type-dto";

export interface ExpiredQualifyingDto {
    id:string;
    requestCode :string;
    facilities :FacilityShortDto;
     qualificationRequestType :QualificationTypeDto
      customers :CustomerShortDto
      qualificationRequestVersions  :QualificationRequestVersionDto[];
}
export interface QualificationRequestVersionDto
{
id:string;
  period :number;
  price :number;
  studyPeriod :number;
  remainingStudyPeriod :number;
  requestFrom :Date;
  assignedOn :Date;
 requestTo :Date;
 ownerEmployeeId :string;
 decisionNo :string;
  requestOn :Date;

}