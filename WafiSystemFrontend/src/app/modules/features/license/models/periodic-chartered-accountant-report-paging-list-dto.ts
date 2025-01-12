import { CustomerShortDto } from "./facility-short-dto";

export interface PeriodicCharteredAccountantReportPagingListDto{
    id:string;
    licenseProjectName:string;
    facilityName:string;
    customerId:string;
    depositDate:Date;
    reportTypeId:PeriodicCharteredAccountantReportTypeEnum;
    quarterTypeId?:PeriodicCharteredAccountantReportQuarterTypeEnum;
    year?:number;
    month?:number;
    fromDate:Date;
    toDate:Date;
    createdOn:Date;
    reportType:PeriodicCharteredAccountantReportTypeDto;
    quarterType:PeriodicCharteredAccountantReportQuarterTypeDto;
    customer: CustomerShortDto;
}
export interface PeriodicCharteredAccountantReportTypeDto{
    id:number
    name: string
}
export interface PeriodicCharteredAccountantReportQuarterTypeDto{
    id:number
    name: string
}
export enum PeriodicCharteredAccountantReportTypeEnum{
    Monthly = 1,
    //ربعى
    Quarter = 2,
    //عن فترة
    Period = 3
}

export enum PeriodicCharteredAccountantReportQuarterTypeEnum{
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4
}