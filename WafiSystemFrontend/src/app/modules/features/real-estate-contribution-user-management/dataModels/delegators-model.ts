export interface Delegatorstabledata {
    id: string;
    identityNumber: string;
    mobileNumber: string;
    email: string | null;
	name: string | null;
    nationalityName: string | null;
    isProfileCreated: boolean;
    departmentId: string | null;
    departmentName: string;
    employeeTypeId: number | null;
    employeeTypeName: string;
}
