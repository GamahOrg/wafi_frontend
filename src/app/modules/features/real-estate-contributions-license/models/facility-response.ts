export class facilityResponse {
  id: string = '';
  facilityCode: string = '';
  commercialRegisterNumber?: string = '';
  facilityName: string = '';
  commercialRegisterStartDate: Date = new Date();
  commercialRegisterEndDate: Date = new Date();
  facilityType: string = '';
  facilityBusinessTypes: facilityBusinessType[] = [];
}

export class facilityBusinessType {
  id: string = '';
  businessType: string = '';
}
