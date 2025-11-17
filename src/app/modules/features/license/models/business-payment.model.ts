export interface LicenseProjectBusinessPaymentModel {
  id: string;
  modelTitle?: string;
  licenseProjectId?: string;
  refunds: number;
  paymentDistributionTypeId: number;
  paymentInstallments: LicenseProjectBusinessPaymentInstallmentModel[];
}

export interface LicenseProjectBusinessPaymentInstallmentModel {
  id: string;
  licenseProjectBusinessPaymentId: string;
  installmentNumber: number;
  rentPercentage: number;
  deductionPercentage: number;
  completionRateForAdvancePayment: number;
  rentDate?: Date;
  deductionDate?: Date;
  description?: string;
  isFirstInstallment: boolean;
  isLastInstallment: boolean;
}

export interface PaymentRow {
  id: number;
  installmentId?: string;
  description: string;
  deductionRate: number | null;
  completionRate: number | null;
}

export interface CreateLicenseProjectBusinessPaymentModel {
  modelTitle?: string;
  refunds: number;
  licenseProjectId?: string;
  isActive?:boolean;
  paymentDistributionTypeId: number;
  licenseProjectBuyerPaymentTypeId: number;
  paymentInstallments: CreateLicenseProjectBusinessPaymentInstallmentModel[];
}

export interface CreateLicenseProjectBusinessPaymentInstallmentModel {
  installmentNumber: number;
  rentPercentage: number;
  deductionPercentage: number;
  description?: string;
}

export interface UpdateLicenseProjectBusinessPaymentModel {
  id: string;
  modelTitle?: string;
  refunds: number;
  licenseProjectId?: string;
  isActive?:boolean;
  isUpdateVersion?:boolean;
  licenseProjectBuyerPaymentTypeId:number;
  paymentDistributionTypeId: number;
  paymentInstallments: UpdateLicenseProjectBusinessPaymentInstallmentModel[];
}

export interface UpdateLicenseProjectBusinessPaymentInstallmentModel {
  id: string;
  rentPercentage: number;
  deductionPercentage: number;
  installmentNumber: number;
  rentDate?: Date;
  deductionDate?: Date;
  description?: string;
  isFirstInstallment: boolean;
  isLastInstallment: boolean;
}

export interface LicenseProjectBusinessPaymentTemplateModel {
  id: string;
  templateName: string;
  refunds: number;
  isActive:boolean;
  licenseProjectBusinessPayment: LicenseProjectBusinessPaymentModel;
}

export interface SaveAsTemplateModel {
  paymentId: string;
  templateName: string;
}

export interface ApplyTemplateModel {
  templateId: string;
  projectId: string;
}


export interface LicenseProjectBusinessPaymentVersionDto {
  versionId: string
  versionName: string
  versionDate: Date
  licenseProjectBusinessPaymentTemplateList: LicenseProjectBusinessPaymentInstallmentModel[]
}