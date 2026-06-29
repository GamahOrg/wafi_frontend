export class QualificationTypeDto {
    id :string = '';
    typeName :string = '';
    typeCode : string = '';
    discerption : string = '';
    showForWafi: boolean=false;
    showForRealStateContribution: boolean=false;
    requestStudyingDuration:number = 0;
    qualificationPeriods:SysQualificationPeriodCreateUpdateDto[]=[];
    qualificationSteps:SysQualificationStepCreateUpdateDto[]=[];
}
export class SysQualificationStepCreateUpdateDto{
    id :string = '';
    qualificationTypeId :string='';
    discerption :string='';
    order :number=0;
}
export class SysQualificationPeriodCreateUpdateDto{
    id :string = '';
    qualificationTypeId :string = '';
    period :number=0;
    price :number=0;
}