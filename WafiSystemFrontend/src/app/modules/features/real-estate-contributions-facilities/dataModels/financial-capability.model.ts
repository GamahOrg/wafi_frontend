//financial capability
export class financialCapabilityResponseBE {
    id: string = "";
    cpalicenseNumber: string = "";
    creditRecordIntegrityCertificateDate: Date = new Date();
    financialStatementDescription: string = "";
    certificateOfZakatIncome: string = "";
    facilityId:string="";
    qualificationFinancialStatements: QualificationFinancialStatementBE[] = [];
    creditRecordIntegrityCertificateFile:FileManagerBE =new FileManagerBE();
  }
export class financialCapabilityResponseFE {
  Id: string = "";
  CpalicenseNumber: string = "";
  CreditRecordIntegrityCertificateDate: Date = new Date();
  FinancialStatementDescription: string = "";
  CertificateOfZakatIncome: string = "";
  FacilityId:string="";
  QualificationFinancialStatements: QualificationFinancialStatementFE[] = [];
  CreditRecordIntegrityCertificateFile:FileManagerFE = new FileManagerFE(new FileManagerBE());
  constructor(_financialCapabilityResponseBE: financialCapabilityResponseBE) {
    if(_financialCapabilityResponseBE){
      this.Id = _financialCapabilityResponseBE.id;
      this.CpalicenseNumber = _financialCapabilityResponseBE.cpalicenseNumber;
      this.CreditRecordIntegrityCertificateDate = _financialCapabilityResponseBE.creditRecordIntegrityCertificateDate;
      this.FinancialStatementDescription = _financialCapabilityResponseBE.financialStatementDescription;
      this.CertificateOfZakatIncome = _financialCapabilityResponseBE.certificateOfZakatIncome;
      this.FacilityId = _financialCapabilityResponseBE.facilityId;
      _financialCapabilityResponseBE.qualificationFinancialStatements.forEach(x=>{
        this.QualificationFinancialStatements.push(new QualificationFinancialStatementFE(x));
      });
      this.CreditRecordIntegrityCertificateFile = new FileManagerFE(_financialCapabilityResponseBE.creditRecordIntegrityCertificateFile);
    
    }
  }
}
  
export class financialCapabilityDto {
  
  id: string = "";
  cpalicenseNumber: string = "";
  creditRecordIntegrityCertificateDate: Date = new Date();
  creditRecordIntegrityCertificateFileId: string|null = null;
  financialStatementDescription: string = "";
  certificateOfZakatIncome: string = "";
  facilityId:string="";
  addedQualificationFinancialStatements: any[] = [];
}

// financial statement
export class QualificationFinancialStatementBE {
  id: string = "00000000-0000-0000-0000-000000000000";
  description: string = "";
  financialStatementFile: FileManagerBE|null = new FileManagerBE();
}
export class QualificationFinancialStatementFE {
  Id: string = "00000000-0000-0000-0000-000000000000";
  Description: string = "";
  FinancialStatementFile: FileManagerFE = new FileManagerFE(new FileManagerBE());
  constructor(private qualificationFinancialStatementBE:QualificationFinancialStatementBE){
    if(qualificationFinancialStatementBE){
      this.Id = qualificationFinancialStatementBE.id;
      this.Description = qualificationFinancialStatementBE.description;
      this.FinancialStatementFile = new FileManagerFE(qualificationFinancialStatementBE.financialStatementFile as FileManagerBE);

    }
  }
}

//file manager
export class FileManagerBE {
  id: string = "00000000-0000-0000-0000-000000000000";
  fileDescription : string = "";
  filePath : string = "";
  fileType : string = "";
}
export class FileManagerFE {
  Id: string = "00000000-0000-0000-0000-000000000000";
  FileDescription : string = "";
  FilePath : string = "";
  FileType : string = "";
  constructor(private fileManagerBE:FileManagerBE){
    if(fileManagerBE){
      this.Id = fileManagerBE.id;
      this.FileDescription = fileManagerBE.fileDescription;
      this.FilePath = fileManagerBE.filePath;
      this.FileType = fileManagerBE.fileType;
    }
    
  }
  
}