import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";

export class EmployeeRegistrationDto {
    public  id:string =""
    public UserId: string = ""

    public  employeeName :string="";
    public  employeeShortName :string="";
    public  nidnumber :string="";
    public   departmentName :string="";
    public   departmentId:string="";
    public  departmentCode:number=0;
    public  isExist :boolean=false;
    public  isSystemAdmin :boolean=false;
    public  isDepartmentAdmin :boolean=false;
    public requestAutomaticDistribution:boolean=false;
    public employeeTypeId:number=0;
    public  isResponsibleEngineer :boolean=false;
    public  isEngineeringManagementDirector :boolean=false;
    public MobileNumber: string=""
    public EmployeeEmail?: string
    public IntegrationStatuse: boolean = false
    public RequestAutomaticDistribution?: boolean
    public  ProfileImageFileId: string =""
    public ProfileImageFile?: SysFileManagerCreateUpdateDto = new SysFileManagerCreateUpdateDto()
    public permissions? : PermissionEnum[]
}
enum PermissionEnum
{
    ViewAllQualification = 1,
    StudyQualification = 2,
    ViewAllLicense = 3,
    StudyLicense = 4,
    ManageUsers = 5,
    ShowProjects = 6,
    ProblemsAndReports = 7
}
// export class EmployeeRegistration {
//   UserId: string
//   MobileNumber: string
//   EmployeeEmail?: string
//   IntegrationStatuse: boolean
//   RequestAutomaticDistribution?: boolean
//   ProfileImageFileId: string
//   ProfileImageFile?: SysFileManagerCreateUpdateDto

//     EmployeeName: string
//     EmployeeShortName: string
//     Nidnumber: string
//     DepartmentName: string
//     DepartmentId?: string
//     EmployeeTypeId: number
//     IsExist: boolean
//     IsResponsibleEngineer: boolean
//     IsEngineeringManagementDirector: boolean
//   }
// Customer 
export class customerResponseBE {
    id: string = "";
    nidnumber: string = "";
    fullName: string = "";
    nationality: string = "";
    isExist: boolean = false;
    mobile1: string = ""
    facilities: facilityResponseBE[] = [];
  }
  export class customerResponseFE {
    Id: string = "";
    NIDNumber: string = "";
    FullName: string = "";
    Nationality: string = "";
    IsExist: boolean = false;
    facilities: facilityResponseFE[] = [];
    mobile1: string = ""
    constructor(_customerResponseBE: customerResponseBE) {
      this.Id = _customerResponseBE.id
      this.NIDNumber = _customerResponseBE.nidnumber
      this.FullName = _customerResponseBE.fullName
      this.Nationality = _customerResponseBE.nationality
      this.IsExist = _customerResponseBE.isExist
      this.mobile1 = _customerResponseBE.mobile1
      _customerResponseBE.facilities.map((facility: facilityResponseBE) => {
        this.facilities.push({
          Id: facility.id,
          FacilityCode: facility.facilityCode,
          CommercialRegisterNumber: facility.commercialRegisterNumber,
          FacilityName: facility.facilityName,
          CommercialRegisterStartDate: facility.commercialRegisterStartDate,
          CommercialRegisterEndDate: facility.commercialRegisterEndDate,
          FacilityType: facility.facilityType,
          FacilityBusinessTypes: facility.facilityBusinessTypes
        }
        )
      })
    }
  }
  
  // Facility
  export class facilityResponseBE {
    id: string = "";
    facilityCode: string = "";
    commercialRegisterNumber: string = "";
    facilityName: string = "";
    commercialRegisterStartDate: Date = new Date();
    commercialRegisterEndDate: Date = new Date();
    facilityType: string = "";
    facilityBusinessTypes: facilityBusinessTypeBE[] = [];
  }
  
  export class facilityBusinessTypeBE {
    id: string = "";
    businessType: string = "";
  }
  
  export class facilityBusinessTypeFE {
    id: string = "";
    businessType: string = "";
    constructor(_facilityBusinessTypeBE: facilityBusinessTypeBE) {
      this.id = _facilityBusinessTypeBE.id;
      this.businessType = _facilityBusinessTypeBE.businessType;
    }
  }
  
  export class facilityResponseFE {
    Id: string = "";
    FacilityCode: string = "";
    CommercialRegisterNumber: string = "";
    FacilityName: string = "";
    CommercialRegisterStartDate: Date = new Date();
    CommercialRegisterEndDate: Date = new Date();
    FacilityType: string = "";
    FacilityBusinessTypes: facilityBusinessTypeFE[] = [];
    constructor(_facilityResponseBE: facilityResponseBE) {
      this.Id = _facilityResponseBE.id;
      this.FacilityCode = _facilityResponseBE.facilityCode;
      this.CommercialRegisterNumber = _facilityResponseBE.commercialRegisterNumber;
      this.FacilityName = _facilityResponseBE.facilityName;
      this.CommercialRegisterStartDate = _facilityResponseBE.commercialRegisterStartDate;
      this.CommercialRegisterEndDate = _facilityResponseBE.commercialRegisterEndDate;
      this.FacilityType = _facilityResponseBE.facilityType;
      _facilityResponseBE.facilityBusinessTypes.forEach(facilityType => {
        let facility = {
          id: facilityType.id,
          businessType: facilityType.businessType
        }
        this.FacilityBusinessTypes.push(facility)
      })
    }
  }
    
  export class customerResponse {
    id: string = '';
    nidnumber: string = '';
    fullName: string = '';
    nationality: string = '';
    mobile1: string = '';
    mobile2: string = '';
    email: string = '';
    facilities: facilityResponse[] = [];
    isDelegator: boolean = false;
    isProjectManager: boolean = false;
    profileImageFile: SysFileManagerCreateUpdateDto | null = null;
    profileImageFileId: string = '';
  }
  export interface YaqeenCustomer {
    nidnumber: string;
    shortName: string;
    fullName: string;
    nationality: string;
    mobile1: string;
    mobile2: string;
    email: string;
    jobTitle?: string;
    // Website?: string;
  }
  
  export interface EmployeeRegisterationResponse {
    status: RegistrationStatus,
    employee : EmployeeRegistrationDto,
    nafathValidationNumber: number,
    transactionId: string
  
  
  }

  export interface registration {
    nIdNumber: string
    nIdType: nIdType,
    month: number,
    year: number | null
  }
  export enum nIdType {
    citizen = 0,
    resident = 1
  }
  export enum RegistrationStatus {
    WrongInditityNumber = 0,
    CorrectInditityNumber = 1,
    EmployeeISExist = 2,
    Waiting = 3,
  }
  
  
  // Facility
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

  export enum DepartmentCodeEnum
  {
      management=1,
      qualification=2,
      finance=3,
      assistantSecretaryGeneral=4,
      secretaryGeneral=5,
      qualificationCommittee=6,
      engineering=7,
      licenses=8,
      escrowAccounts=9,
      legal=10,
      project=11,
      controlAndOversight=12,
      partnersAndBeneficiaries=13,
      wafiCommittee=14,
      officeOfHisExcellencyTheMinister=15,
      ShowLicenseRequests = 16,
      ShowQualificationRequests = 17,
      ShowLicenseQualificationRequests = 18,
  }
  
  
  
  