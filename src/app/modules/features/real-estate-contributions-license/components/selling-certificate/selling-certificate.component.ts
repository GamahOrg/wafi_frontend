import { Component, Input } from '@angular/core';
import type { certificateData, CertificateTemplate, LicenseCertificateDto } from '../../models/license-certification.model';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-selling-certificate',
  templateUrl: './selling-certificate.component.html',
  styleUrls: ['./selling-certificate.component.scss']
})
export class SellingCertificateComponent {

  @Input() certificateData!: LicenseCertificateDto;

  certificateTemplateDate: CertificateTemplate | null = null;

  // certificates: any[] = [];
  constructor(private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.buildCertificates();

  }

  buildCertificates() {

    switch (this.certificateData.licenseRequestTypeTypeCode) {
      // رخص البيع
      case LicenseRequestTypeTypeCodeEnum.SellRawLand: 
      
      {
        // this.certificateTemplateDate = this.getLICENSETOSELLRAWLANDSONTHEMAP();
        this.certificateTemplateDate = this.buildTemplate('License to sell raw lands on the map');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.SellRealEstateUnits: 
      case LicenseRequestTypeTypeCodeEnum.PRESellRealEstateUnits: 
      
      {
        // this.certificateTemplateDate = this.getOFFPLANSALELICENSETemplate();
        this.certificateTemplateDate = this.buildTemplate('OFF-PLAN SALE LICENSE');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.SellToSubDeveloper: {
        // this.certificateTemplateDate = this.getSALESLICENSEFORTHESUBDEVELOPER();
        this.certificateTemplateDate = this.buildTemplate('SALES LICENSE FOR THE MAIN DEVELOPER INVOLVED IN THE DEVELOPMENT');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.SellToMasterDeveloperNotCo_Development: {
        // this.certificateTemplateDate = this.getSALESLICENSEFORAMAJORDEVELOPERWHOISNOTINVOLVEDINTHEDEVELOPMENT();
        this.certificateTemplateDate = this.buildTemplate('SALES LICENSE FOR A MAJOR DEVELOPER WHO IS NOT INVOLVED IN THE DEVELOPMENT');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.SellToMasterDeveloperCo_Development: {
        // this.certificateTemplateDate = this.getSALESLICENSEFORTHEMAINDEVELOPERINVOLVEDINTHEDEVELOPMENT();
        this.certificateTemplateDate = this.buildTemplate('SALES LICENSE FOR THE MAIN DEVELOPER INVOLVED IN THE DEVELOPMENT');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.SellRealEstateUnitsForSmallAndMediumProjects: {
        // this.certificateTemplateDate = this.OFFPLANSALELICENSEFORSMALLANDMEDIUMPROJECTSTemplate();
        this.certificateTemplateDate = this.buildTemplate('OFF-PLAN DISPLAY IN EXHIBITIONS FOR PROPERTIES INSIDE K.S.A');
        break;
      }

      //رخص العرض
      case LicenseRequestTypeTypeCodeEnum.ShowInternalUnits: {
        // this.certificateTemplateDate = this.OFFPLANDISPLAYINEXHIBITIONSFORPROPERTIESINSIDEKSATemplate();
        this.certificateTemplateDate = this.buildTemplate('OFF-PLAN DISPLAY IN EXHIBITIONS FOR PROPERTIES INSIDE K.S.A');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.ShowExternalUnits: {
        // this.certificateTemplateDate = this.OFFPLANDISPLAYINEXHIBITIONSFORPROPERTIESOUTSIDEKSATemplate();
        this.certificateTemplateDate = this.buildTemplate('LICENSE OF PROMOTING INTERNAL OFF-PLAN PROPERTIES IN K.S.A');
        break;
      }

      // رخص التسويق
      case LicenseRequestTypeTypeCodeEnum.MarketingForSalesProjectsInsideKingdomWithoutReceivingPayments: {
        // this.certificateTemplateDate = this.getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESININSIDEWITHOUTPAYMENTSemplate();
        this.certificateTemplateDate = this.buildTemplate('LICENSE OF PROMOTING INTERNAL OFF-PLAN PROPERTIES IN K.S.A');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.MarketingForSalesProjectsInsideKingdomReceivingPayments: {
        // this.certificateTemplateDate = this.getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESININSIDEWITHPAYMENTSemplate();
        this.certificateTemplateDate = this.buildTemplate('LICENSE OF PROMOTING WITH RECIVE BOOKING PAYMENTS INTERNAL OFF-PLAN PROPERTIES IN K.S.A');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.MarketingForSalesProjectsOutsideKingdomWithoutReceivingPayments: {
        // this.certificateTemplateDate = this.getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESOUTSIDESemplate();
        this.certificateTemplateDate = this.buildTemplate('LICENSE OF PROMOTING WITH RECIVE BOOKING PAYMENTS INTERNAL OFF-PLAN PROPERTIES IN K.S.A');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.MarketingRealEstateTemporaryInternalAndExternal: {
        // this.certificateTemplateDate = this.getTEMPORARYMARKETINGLICENSEFORREALESTATE();
        this.certificateTemplateDate = this.buildTemplate('A TEMPORARY MARKETING LICENSE FOR REAL ESTATE (INTERNAL AND EXTERNAL)');
        break;
      }

      // رخص التأجير
      case LicenseRequestTypeTypeCodeEnum.RentalReceiptAmountsNotMoreFirstYear: {
        // this.certificateTemplateDate = this.getREQUESTARENTALLICENSEANDRECEIVEAMOUNTSNOTEXCEEDINGTHEFIRSTYEARRENT();
        this.certificateTemplateDate = this.buildTemplate('REQUEST A RENTAL LICENSE AND RECEIVE AMOUNTS NOT EXCEEDING THE FIRST YEAR’S RENT');
        break;
      }
      case LicenseRequestTypeTypeCodeEnum.RentalReceiptAmountsMoreThanFirstYear: {
        // this.certificateTemplateDate = this.getREQUESTINGARENTALLICENSEANDRECEIVINGAMOUNTSEXCEEDINGTHEFIRSTYEARRENT();
        this.certificateTemplateDate = this.buildTemplate('REQUESTING A RENTAL LICENSE AND RECEIVING AMOUNTS EXCEEDING THE FIRST YEAR’S RENT');
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }


  buildTemplate(englishLicenseTitle: string) {

    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: 'ترخيـص البيــع علــى الخـارطة',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: englishLicenseTitle,
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value:this.certificateData.categoryName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [] as certificateData[],
    } as CertificateTemplate;
  }


  OFFPLANSALELICENSEFORSMALLANDMEDIUMPROJECTSTemplate() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: 'رخصـة بيــع على الخارطـة للمشـاريـع الصغـيرة والمتـوسطــة',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'OFF-PLAN SALE LICENSE FOR SMALL AND MEDIUM PROJECTS',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'Project Size:',
          arabicTitle: 'حجم المشروع:',
          value: this.certificateData.projectSize
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Units Type', arabicTitle: 'نوع الوحدات', value: this.certificateData.unitsType },
        { englishTitle: 'Project Area', arabicTitle: 'مساحة المشروع', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData.projectAreaName + ' / ' + this.certificateData.projectCityName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الاستشاري', value: this.certificateData.engineeringConsultantFacilityName },
        { englishTitle: 'Project Bank Account No.', arabicTitle: 'رقم الحساب البنكي للمشروع', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Account Bank.', arabicTitle: 'بنك حساب المشروع', value: this.certificateData.projectBankName }
      ] as certificateData[],
      footerData: [{
        arabicTitle: '*خاضعة لقواعد ترخيص المشاريع الصغيرة والمتوسطة وفق قرار الهيئة العامة للعقار رقم (/٢٩٦ ٦) وتاريخ ١٤٤٠/٠٥/١٦هـ.',
        englishTitle: '',
        value: '',
        className: 'text text-success'
      }] as certificateData[],
    } as CertificateTemplate;
  }

  // تأجير
  getREQUESTARENTALLICENSEANDRECEIVEAMOUNTSNOTEXCEEDINGTHEFIRSTYEARRENT() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: ' رخصة تأجير مع استلام مبالغ لا تزيد عن إيجار السنة الأولي',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'REQUEST A RENTAL LICENSE AND RECEIVE AMOUNTS NOT EXCEEDING THE FIRST YEAR’S RENT',
      headerData: [
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Units Type', arabicTitle: 'نوع الوحدات', value: this.certificateData.unitsType },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [
        {
          arabicTitle: 'هذا الترخيص يخول المؤجر باستلام مبالغ مالية بحد أقصاه قيمة مبلغ التأجير للسنة الأولى فقط لا غير. ',
          englishTitle: 'This license authorize the landlord to receive a maximum of the rst year rent payments only. *',
          value: '',
          className: 'text text-success'
        },
        {
          arabicTitle: 'تُطبق التزامـات المؤجر والمستأجر الـواردة بالمـادة رقم (٨) من قـواعد الترخيـص للتأجير على الخـارطة. ',
          englishTitle: 'Off-Plan rent licensing rules, article NO. (8) apply.',
          value: '',
          className: 'text text-success'
        },
      ] as certificateData[],
    } as CertificateTemplate;
  }


  getREQUESTINGARENTALLICENSEANDRECEIVINGAMOUNTSEXCEEDINGTHEFIRSTYEARRENT() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: ' رخصة تأجير مع استلام مبالغ تزيد عن إيجار السنة الأولي',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'REQUESTING A RENTAL LICENSE AND RECEIVING AMOUNTS EXCEEDING THE FIRST YEAR’S RENT',
      headerData: [
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Units Type', arabicTitle: 'نوع الوحدات', value: this.certificateData.unitsType },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [
        {
          arabicTitle: 'هذا الترخيص يخول المؤجر باستلام مبالغ مالية تزيد عن قيمة مبلغ التأجير للسنة الأولى. ',
          englishTitle: 'This license authorize the landlord to receive a maximum of the rst year rent payments only. *',
          value: '',
          className: 'text text-success'
        },
        {
          arabicTitle: 'تُطبق التزامـات المؤجر والمستأجر الـواردة بالمـادة رقم (٨) من قـواعد الترخيـص للتأجير على الخـارطة. ',
          englishTitle: 'Off-Plan rent licensing rules, article NO. (8) apply.',
          value: '',
          className: 'text text-success'
        },
      ] as certificateData[],
    } as CertificateTemplate;
  }

  // رخصة تســويق عــقارات داخلية عـلى الخــارطة داخــل المملكة العربية السعودية مع عدم استلام مبالغ
  getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESININSIDEWITHOUTPAYMENTSemplate() {

    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: 'رخصة تســويق عــقارات داخلية عـلى الخــارطة داخــل المملكة العربية السعودية',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'LICENSE OF PROMOTING INTERNAL OFF-PLAN PROPERTIES IN K.S.A',
      headerData: [
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Units Type', arabicTitle: 'نوع الوحدات', value: this.certificateData.unitsType },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [{
        arabicTitle: 'هــذا الترخيــص لا يخــول للشركــة استـــلام أي مبــــالغ ماليـــة من المشترين أو إبرام أي عقود بيع وحدات عقارية على الخارطة.',
        englishTitle: 'Under this lisense, the Compay is not authorized to recive any payments from buyers or sign any contract to buy international o-plan properties',
        value: '',
        className: 'text text-success'
      }] as certificateData[],
    } as CertificateTemplate;
  }

  // رخصة تســويق عــقارات داخلية عـلى الخــارطة داخــل المملكة العربية السعودية مع استلام مبالغ
  getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESININSIDEWITHPAYMENTSemplate() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: 'رخصة تســويق مع استلام مبالغ حجز لعــقارات داخلية عـلى الخــارطة داخــل المملكة العربية السعودية',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'LICENSE OF PROMOTING WITH RECIVE BOOKING PAYMENTS INTERNAL OFF-PLAN PROPERTIES IN K.S.A',
      headerData: [

      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [
        {
          arabicTitle: 'هذا الترخيص يخول المطور و المسوق باستلام مبالغ حجز بحد أقصاه ٪٥ من قيمة الوحدة على أن يتم الإيداع بحساب الضمان رقم :',
          englishTitle: 'This license authorize the developers and the marketers to receive a maximum of 5% booking payments of the unit value, provided that the amount of the reservation should be deposited in the escrow account No:',
          value: this.certificateData.projectBankAccountNo,
          className: 'text text-danger'
        }
      ] as certificateData[],
    } as unknown as CertificateTemplate;
  }

  // رخصة تسويق عقارات خارجية
  getOFFPLANLICENSEOFPROMOTINGINTERNALPROPERTIESOUTSIDESemplate() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: 'رخصة تســويق مع استلام مبالغ حجز لعــقارات داخلية عـلى الخــارطة داخــل المملكة العربية السعودية',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'LICENSE OF PROMOTING WITH RECIVE BOOKING PAYMENTS INTERNAL OFF-PLAN PROPERTIES IN K.S.A',
      headerData: [
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [{
        arabicTitle: 'هذا الترخيـص لا يخـول للشركـة استــلام أي مبــالغ ماليـة من المشترين أو إبرام أي عقود بيع وحدات عقارية خارجية.',
        englishTitle: 'Under this lisense, the Compay is not authorized to recive any payments from buyers or sign any contract to buy international o-plan properties',
        value: '',
        className: 'text text-success'
      }] as certificateData[],
    } as CertificateTemplate;
  }

  // (رُخصة تسويق مؤقت للعقارات (الداخلية والخارجية
  getTEMPORARYMARKETINGLICENSEFORREALESTATE() {
    return {
      showSideData: true,
      showFooter: true,
      showFooterAccountNo: true,
      accountNo: '',
      // arabicTitle: '(رُخصة تسويق مؤقت للعقارات (الداخلية والخارجية', 
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'A TEMPORARY MARKETING LICENSE FOR REAL ESTATE (INTERNAL AND EXTERNAL)',
      headerData: [
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Organization Name', arabicTitle: 'اسم المنشأة', value: this.certificateData.facilityName },
        { englishTitle: 'Commercial Register No.', arabicTitle: 'رقم السجل التجاري', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع', value: this.certificateData.projectAreaName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'License No.', arabicTitle: 'رقم الترخيص', value: this.certificateData.licenseNumber },
        { englishTitle: 'Issuing Date', arabicTitle: 'تاريخ الإصدار', value: this.certificateData.startOn },
        { englishTitle: 'Expiry Date', arabicTitle: 'تاريخ الإنتهاء', value: this.certificateData.endOn }
      ] as certificateData[],
      footerData: [{
        // arabicTitle: 'هذا الترخيـص لا يخـول للشركـة استــلام أي مبــالغ ماليـة من المشترين أو إبرام أي عقود بيع وحدات عقارية خارجية.',
        // englishTitle: 'Under this lisense, the Compay is not authorized to recive any payments from buyers or sign any contract to buy international o-plan properties',
        // value: '',
        // className: 'text text-success'
      }] as certificateData[],
    } as CertificateTemplate;
  }

  // رخصة عــرض عقـــارات داخليــة على الخــارطـــة داخــــــل المملكــــة العربيــة السعوديـــة
  OFFPLANDISPLAYINEXHIBITIONSFORPROPERTIESINSIDEKSATemplate() {
    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: 'عــرض عقـــارات داخليــة على الخــارطـــة داخــــــل المملكــــة العربيــة السعوديــ',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'OFF-PLAN DISPLAY IN EXHIBITIONS FOR PROPERTIES INSIDE K.S.A',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Company Name', arabicTitle: 'اسم الشركة', value: this.certificateData.facilityName },
        { englishTitle: 'Company Location', arabicTitle: 'مقر الشركة', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Project Location', arabicTitle: 'موقع المشروع (المدينة/الحي)', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.streetName },
        { englishTitle: 'Post Date', arabicTitle: 'تاريخ المشاركة', value: this.certificateData.startOn },
        { englishTitle: 'Post Period', arabicTitle: 'مدة المشاركة', value: this.certificateData.showPeriod },
        { englishTitle: 'Exhibition Name', arabicTitle: 'مقر العرض', value: this.certificateData.exhibitionName },
      ] as certificateData[],
      footerData: [
        {
          arabicTitle: 'هذا الترخيـص لا يخـول للشركـة استــلام أي مبــالغ ماليـة من المشترين أو إبرام أي عقود بيع وحدات عقارية خارجية.',
          englishTitle: 'Under this license, the company is not authorized to receive any payments from buyers or sign any contract to buy international o-plan properties.',
          value: '',
          className: 'text text-success'
        }
      ] as certificateData[],
    } as CertificateTemplate;
  }

  // رخصة عــرض عقـــارات خارجية على الخــارطـــة داخــــــل المملكــــة العربيــة السعوديـــة
  OFFPLANDISPLAYINEXHIBITIONSFORPROPERTIESOUTSIDEKSATemplate() {
    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: 'عــرض عقـــارات خارجية على الخــارطـــة داخــــــل المملكــــة العربيــة السعوديــ',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'OFF-PLAN DISPLAY IN EXHIBITIONS FOR PROPERTIES OUTSIDE K.S.A',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Company Name', arabicTitle: 'اسم الشركة', value: this.certificateData.facilityName },
        { englishTitle: 'Company Location', arabicTitle: 'مقر الشركة', value: this.certificateData.commercialRegisterNumber },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Project Location', arabicTitle: 'مقر المشروع', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.streetName },
        { englishTitle: 'Post Date', arabicTitle: 'تاريخ المشاركة', value: this.certificateData.startOn },
        { englishTitle: 'Post Period', arabicTitle: 'مدة المشاركة', value: this.certificateData.showPeriod },
        { englishTitle: 'Exhibition Name', arabicTitle: 'اسم المعرض', value: this.certificateData.exhibitionName },
      ] as certificateData[],
      footerData: [
        {
          arabicTitle: 'هذا الترخيـص لا يخـول للشركـة استــلام أي مبــالغ ماليـة من المشترين أو إبرام أي عقود بيع وحدات عقارية خارجية.',
          englishTitle: 'Under this license, the company is not authorized to receive any payments from buyers or sign any contract to buy international o-plan properties.',
          value: '',
          className: 'text text-success'
        }
      ] as certificateData[],
    } as CertificateTemplate;
  }

  getDate(date: Date | null): string | void {
    if (date)
      return this.datePipe.transform(date, 'yyyy/MM/dd')?.toString()
    // console.log("date", date)
    // // return date;
    // if (date) {
    //   return new Intl.DateTimeFormat('AR-EG', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
    // }
  }
  //
  getOFFPLANSALELICENSETemplate() {

    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: 'ترخيـص البيــع علــى الخـارطة',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'OFF-PLAN SALE LICENSE',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }












  getSALESLICENSEFORTHEMAINDEVELOPERINVOLVEDINTHEDEVELOPMENT() {

    return {
      showSideData: true,
      showFooter: true,
      arabicTitle: 'رخصة بيع للمطور رئيسي مشارك بالتطوير',
      // arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'SALES LICENSE FOR THE MAIN DEVELOPER INVOLVED IN THE DEVELOPMENT',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }


  getSALESLICENSEFORAMAJORDEVELOPERWHOISNOTINVOLVEDINTHEDEVELOPMENT() {

    return {
      showSideData: true,
      showFooter: true,
      arabicTitle: 'رخصة بيع للمطور رئيسي غير مشارك بالتطوير',
      // arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'SALES LICENSE FOR A MAJOR DEVELOPER WHO IS NOT INVOLVED IN THE DEVELOPMENT',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }


  getSALESLICENSEFORTHESUBDEVELOPER() {

    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: ' رخصة بيع للمطور الفرعي',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'SALES LICENSE FOR THE SUB-DEVELOPER',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }


  getLICENSETOSELLRAWLANDSONTHEMAP() {

    return {
      showSideData: true,
      showFooter: true,
      // arabicTitle: 'رخصة بيع أراضي خام على الخارطة',
      arabicTitle: this.certificateData.licenseRequestTypeName,
      englishTitle: 'License to sell raw lands on the map',
      headerData: [
        {
          englishTitle: 'License No.',
          arabicTitle: 'رقم الترخيص:',
          value: this.certificateData.licenseNumber
        },
        {
          englishTitle: 'Issue Date:',
          arabicTitle: 'تاريخ الإصدار:',
          value: this.getDate(new Date(this.certificateData.startOn!))
        },
        {
          englishTitle: 'Expiry Date:',
          arabicTitle: 'تاريخ الإنتهاء:',
          value: this.getDate(new Date(this.certificateData.endOn!))
        },
        {
          englishTitle: 'License Type:',
          arabicTitle: 'نوع الرخصة:',
          value: this.certificateData.licenseRequestTypeName
        },
      ] as certificateData[],
      bodyData: [
        { englishTitle: 'Developer', arabicTitle: 'المطور', value: this.certificateData.customerName },
        { englishTitle: 'Project Name', arabicTitle: 'اسم المشروع', value: this.certificateData.projectName },
        { englishTitle: 'Number Of Units', arabicTitle: 'عدد الوحدات', value: this.certificateData.numberOfUnits },
        { englishTitle: 'Escrow Account No.', arabicTitle: 'حساب الضمان', value: this.certificateData.projectBankAccountNo },
        { englishTitle: 'Project Area', arabicTitle: 'المساحة', value: this.certificateData.landTotalSpace },
        { englishTitle: 'Region / City', arabicTitle: 'المنطقة / المدينة', value: this.certificateData?.projectCityName + ' / ' + this.certificateData?.projectAreaName },
        { englishTitle: 'Account And Financial Auditor', arabicTitle: 'المحاسب القانوني', value: this.certificateData.charteredAccountantName },
        { englishTitle: 'Consultancy Office', arabicTitle: 'المكتب الإستشاري', value: this.certificateData.engineeringConsultantName },
      ] as certificateData[],
      footerData: [

      ] as certificateData[],
    } as CertificateTemplate;
  }

}

