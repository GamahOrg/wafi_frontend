import { Component, OnInit } from '@angular/core';

interface ContractData {
  contractDate: string;
  contractPlace: string;
}

interface DeveloperData {
  name: string;
  nationality: string;
  commercialRegistration: string;
  phone: string;
  nationalAddress: string;
  email: string;
  representativeName: string;
  representativeNationalId: string;
  representativeMobile: string;
}

interface BuyerData {
  name: string;
  idNumber: string;
  mobile: string;
  nationalAddress: string;
  email: string;
}

interface PropertyRegistrationData {
  deedNumber: string;
  issueDate: string;
  issuePlace: string;
}

interface ProjectData {
  projectName: string;
  city: string;
  district: string;
  generalRealEstateLicenseNumber: string;
  licenseDate: string;
  totalArea: string;
  sharedPartsArea: string;
}

interface UnitData {
  unitType: string;
  unitFacilities: string;
  unitNumber: string;
  buildingNumber: string;
}

interface FinancialData {
  unitType: string;
  unitFacilities: string;
  unitNumber: string;
  guaranteeAccountNumber: string;
  guaranteeAccountBank: string;
  paymentTerms: string[];
}

@Component({
  selector: 'app-standard-contract',
  templateUrl: './standard-contract.component.html',
  styleUrls: ['./standard-contract.component.scss']
})
export class StandardContractComponent implements OnInit {

  contractData: ContractData = {
    contractDate: '',
    contractPlace: ''
  };

  developerData: DeveloperData = {
    name: 'testtttt',
    nationality: 'testttt',
    commercialRegistration: '',
    phone: '',
    nationalAddress: '',
    email: '',
    representativeName: '',
    representativeNationalId: '',
    representativeMobile: ''
  };

  buyerData: BuyerData = {
    name: '',
    idNumber: '',
    mobile: '',
    nationalAddress: '',
    email: ''
  };

  propertyRegistrationData: PropertyRegistrationData = {
    deedNumber: '',
    issueDate: '',
    issuePlace: ''
  };

  projectData: ProjectData = {
    projectName: '',
    city: '',
    district: '',
    generalRealEstateLicenseNumber: '',
    licenseDate: '',
    totalArea: '',
    sharedPartsArea: ''
  };

  unitData: UnitData = {
    unitType: '',
    unitFacilities: '',
    unitNumber: '',
    buildingNumber: ''
  };

  financialData: FinancialData = {
    unitType: '',
    unitFacilities: '',
    unitNumber: '',
    guaranteeAccountNumber: '',
    guaranteeAccountBank: '',
    paymentTerms: [
      'التفويض المادي على المطور عند التأخر في تسليم الوحدة المقارنة على الأفل عن أجرة المثل للوحدة في قيمه معتمد.',
      'التفويض المادي على المطور عند التأخر في تسليم الأرض المطورة على الأقل عن نسبة ٢٪ من قيمة البيع تحتسب على أساس سنوي.'
    ]
  };

  // Signature data
  buyerName: string = 'محمد سالم';
  developerName: string = 'خالد صالح';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Handle form submission
    console.log('Contract Data:', this.contractData);
    console.log('Developer Data:', this.developerData);
    console.log('Buyer Data:', this.buyerData);
    console.log('Property Registration Data:', this.propertyRegistrationData);
    console.log('Project Data:', this.projectData);
    console.log('Unit Data:', this.unitData);
  }

}
