import { Component ,Output, EventEmitter } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { FilterDto, FinancialCenterFileCreateUpdateDto, FinancialTransactionsDuringPeriodOutEscrowAccountDto, PeriodicCharteredAccountantReportCreateUpdateDto, PeriodicCharteredAccountantReportDto, PeriodicCharteredAccountantReportQuarterTypeDto, PeriodicCharteredAccountantReportTypeDto, PeriodicCharteredAccountantReportTypeEnum } from '../../dataModels/periodic-chartered-accountant-report-dto';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PeriodicCharteredAccountantReportService } from '../../services/periodic-chartered-accountant-report.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { SysDepositTypeDto } from '../../models/periodic-chartered-accountant-report-details-dto';


@Component({
  selector: 'app-add-periodic-chartered-accountant-report',
  templateUrl: './add-periodic-chartered-accountant-report.component.html',
  styleUrls: ['./add-periodic-chartered-accountant-report.component.scss']
})
export class AddPeriodicCharteredAccountantReportComponent {
  periodiccharteredaccountantreportlist: string = `/${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.periodiccharteredaccountantreportlist}` as string;
  @Output() dataEmitter = new EventEmitter<boolean>();
  subscriptions: Subscription[] = [];
  filter?:FilterDto
  periodicCharteredAccountantReportType = PeriodicCharteredAccountantReportTypeEnum;
  periodicCharteredAccountantReportCreateUpdate?: PeriodicCharteredAccountantReportCreateUpdateDto;
  periodicCharteredAccountantReport?: PeriodicCharteredAccountantReportDto;
  reportTypes?: PeriodicCharteredAccountantReportTypeDto[];
  reportQuarterTypes?: PeriodicCharteredAccountantReportQuarterTypeDto[];
  sysDepositTypeList?: SysDepositTypeDto[];
  financialCenterFiles?:FinancialCenterFileCreateUpdateDto[];
  bankStatementFileId?: string;
  calculateClosingBalanceResult: number = 0;

  years: number[]=[
    new Date().getFullYear(),
    new Date().getFullYear() -1
  ];
   months: { name: string; id: number }[] = [
    { name: "يناير", id: 1 },
    { name: "فبراير", id: 2 },
    { name: "مارس", id: 3 },
    { name: "أبريل", id: 4 },
    { name: "مايو", id: 5 },
    { name: "يونيو", id: 6 },
    { name: "يوليو", id: 7 },
    { name: "أغسطس", id: 8 },
    { name: "سبتمبر", id: 9 },
    { name: "أكتوبر", id: 10 },
    { name: "نوفمبر", id: 11 },
    { name: "ديسمبر", id: 12 }
  ];

  PeriodicCharteredAccountantReportForm = this._formBuilder.group({
    reportTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    quarterTypeId: this._formBuilder.control<number | null>(null),
    month: this._formBuilder.control<number | null>(null),
    year: this._formBuilder.control<number | null>(null),
    fromDate: this._formBuilder.control<string | null>(null),
    toDate: this._formBuilder.control<string | null>(null),
     //إجمالي قيمة تكاليف المشروع المتوقعة (تكاليف انشائية وغير انشائية)
    totalCost: this._formBuilder.control<number | null>(null, [Validators.required]),
      //التكلفة الانشائة المتوقعة
    // expectedConstructionCost: this._formBuilder.control<number | null>(null, [Validators.required]),
     //هامش الربح المتوقع
    expectedProfile: this._formBuilder.control<number | null>(null, [Validators.required]),

     //   النتائج والتوصيات
    resultsAndRecommendations: this._formBuilder.control<string | null>(null, [Validators.required]),
    //رصيد افتتاح الفترة
    periodOpeningBalance:this._formBuilder.control<number | null>(null),
    // رصيد الاغلاق بناء على كشف الحساب البنكي
    closingBalanceBasedOnBankStatement:this._formBuilder.control<number | null>(null, [Validators.required]),
    
    //العمليات المالية خلال الفترة (من خارج حساب الضمان)
      //تكاليف انشائية
    constructionCosts: this._formBuilder.control<number | null>(null, [Validators.required]),
     //مصاريف ادارية وتسويقية
    administrativeMarketingExpenses: this._formBuilder.control<number | null>(null, [Validators.required]),
     //ايداعات عملاء مستردة
    customerDepositRefunds: this._formBuilder.control<number | null>(null, [Validators.required]),
    //عمولات بنكية
    bankCommissions: this._formBuilder.control<number | null>(null, [Validators.required]),
    //أخرى مدينة
    otherDebts: this._formBuilder.control<number | null>(null, [Validators.required]),
     //إجمالي العمليات المدينة
    totalDebtOperations: this._formBuilder.control<number | null>(null, [Validators.required]),
      //تحصيل من العملاء
    collectionsFromCustomers: this._formBuilder.control<number | null>(null, [Validators.required]),
    //تمويل بنكى
    bankFinancing: this._formBuilder.control<number | null>(null, [Validators.required]),
     //تمويل ذاتى
    selfFinancing: this._formBuilder.control<number | null>(null, [Validators.required]),
    //تمويل الوزارة
    ministryFinancing: this._formBuilder.control<number | null>(null, [Validators.required]),
    //أخرى دائنة
    otherCredits: this._formBuilder.control<number | null>(null, [Validators.required]),
     //إجمالي العمليات الدائنة
    totalCreditOperations: this._formBuilder.control<number | null>(null, [Validators.required]),
      //جدول ادناه يوضح الإيداعات التي لم تظهر في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
    periodicCharteredAccountantReportDeposits:
    this._formBuilder.array([]),
      //جدول ادناه يوضح دفعات لم يتم خصمها في حساب البنك حتى تاريخه “يستطيع إضافة أكثر من عنصر”
    periodicCharteredAccountantReportBatches:
    this._formBuilder.array([]),
  });

  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;

  get controls() {
    return this.PeriodicCharteredAccountantReportForm.controls;
  }

  get periodicCharteredAccountantReportDepositsFormArr(): FormArray {
    return this.PeriodicCharteredAccountantReportForm.get('periodicCharteredAccountantReportDeposits') as FormArray;
  }

  get periodicCharteredAccountantReportBatchesFormArr(): FormArray {
    return this.PeriodicCharteredAccountantReportForm.get('periodicCharteredAccountantReportBatches') as FormArray;
  }

  multipleFilesUploaderData: FileUploader = {
      multiple: true
  } as FileUploader; 

  singleFilesUploaderData: FileUploader = {
      multiple: false,
  } as FileUploader; 

  constructor(
    private _periodicCharteredAccountantReportService: PeriodicCharteredAccountantReportService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }
 
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.loadComponentData();
    }
  }

  loadComponentData(): void {
    const requests = [
      this._periodicCharteredAccountantReportService.getPeriodicCharteredAccountantReportTypes(),
      this._periodicCharteredAccountantReportService.getPeriodicCharteredAccountantReportQuarterTypes(),
      this._periodicCharteredAccountantReportService.GetSysDepositType(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.reportTypes = results[0] as PeriodicCharteredAccountantReportTypeDto[];
        this.reportQuarterTypes = results[1] as PeriodicCharteredAccountantReportQuarterTypeDto[];
        this.sysDepositTypeList = results[2] as SysDepositTypeDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }

  save(): void {
    debugger
    if (!this.PeriodicCharteredAccountantReportForm.valid) {
      this.showValidation = true;
      return;
    }
    
    // Process deposits array - convert string values to proper types

    this.periodicCharteredAccountantReportCreateUpdate = this.PeriodicCharteredAccountantReportForm.value as {} as PeriodicCharteredAccountantReportCreateUpdateDto;
    this.periodicCharteredAccountantReportCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.periodicCharteredAccountantReportCreateUpdate.reportTypeId = Number(this.periodicCharteredAccountantReportCreateUpdate.reportTypeId);
    this.periodicCharteredAccountantReportCreateUpdate.quarterTypeId = Number(this.periodicCharteredAccountantReportCreateUpdate.quarterTypeId);
    this.periodicCharteredAccountantReportCreateUpdate.month = Number(this.periodicCharteredAccountantReportCreateUpdate.month);
    this.periodicCharteredAccountantReportCreateUpdate.year = Number(this.periodicCharteredAccountantReportCreateUpdate.year);
    this.periodicCharteredAccountantReportCreateUpdate.bankStatementFileId = this.bankStatementFileId as string;
    this.periodicCharteredAccountantReportCreateUpdate.expectedConstructionCost = this.periodicCharteredAccountantReport?.expectedConstructionCost as number;
    this.periodicCharteredAccountantReportCreateUpdate.totalActualConstructionCost = this.periodicCharteredAccountantReport?.actualConstructionCost as number;

    this.periodicCharteredAccountantReportCreateUpdate.periodicCharteredAccountantReportDeposits = 
    this.periodicCharteredAccountantReportDepositsFormArr.value.map((deposit: any) => ({
      id: "00000000-0000-0000-0000-000000000000",
      periodicCharteredAccountantReportId: "00000000-0000-0000-0000-000000000000",
      unitCodeOrExpenseType: deposit.unitCodeOrExpenseType,
      sysDepositTypeId: Number(deposit.sysDepositTypeId), // Convert to number/enum
      checkNumber: Number(deposit.checkNumber),
      supplyDate: new Date(deposit.supplyDate),
      riyalsAmount: Number(deposit.riyalsAmount),
      depositDate: new Date(deposit.depositDate),
      sysDepositType: null
    }));

  // Process batches array - convert string values to proper types
  this.periodicCharteredAccountantReportCreateUpdate.periodicCharteredAccountantReportBatches = 
    this.periodicCharteredAccountantReportBatchesFormArr.value.map((batch: any) => ({
      id: "00000000-0000-0000-0000-000000000000",
      periodicCharteredAccountantReportId: "00000000-0000-0000-0000-000000000000",
      unitCodeOrExpenseType: batch.unitCodeOrExpenseType,
      sysDepositTypeId: Number(batch.sysDepositTypeId), // Convert to number/enum
      checkNumber: Number(batch.checkNumber),
      supplyDate: new Date(batch.supplyDate),
      riyalsAmount: Number(batch.riyalsAmount),
      bankDebitDate: new Date(batch.bankDebitDate),
      sysDepositType: null
    }));

    //financialTransactionsDuringPeriodOutEscrowAccount 
    let financialTransactionsDuringPeriodOutEscrowAccount = {} as FinancialTransactionsDuringPeriodOutEscrowAccountDto;
    financialTransactionsDuringPeriodOutEscrowAccount.constructionCosts=
    this.PeriodicCharteredAccountantReportForm.controls.constructionCosts.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.administrativeMarketingExpenses=
    this.PeriodicCharteredAccountantReportForm.controls.administrativeMarketingExpenses.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.customerDepositRefunds=
    this.PeriodicCharteredAccountantReportForm.controls.customerDepositRefunds.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.bankCommissions=
    this.PeriodicCharteredAccountantReportForm.controls.bankCommissions.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.otherDebts=
    this.PeriodicCharteredAccountantReportForm.controls.otherDebts.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.totalDebtOperations=
    this.PeriodicCharteredAccountantReportForm.controls.totalDebtOperations.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.collectionsFromCustomers=
    this.PeriodicCharteredAccountantReportForm.controls.collectionsFromCustomers.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.bankFinancing=
    this.PeriodicCharteredAccountantReportForm.controls.bankFinancing.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.selfFinancing=
    this.PeriodicCharteredAccountantReportForm.controls.selfFinancing.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.ministryFinancing=
    this.PeriodicCharteredAccountantReportForm.controls.ministryFinancing.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.otherCredits=
    this.PeriodicCharteredAccountantReportForm.controls.otherCredits.value as number;
    financialTransactionsDuringPeriodOutEscrowAccount.totalCreditOperations=
    this.PeriodicCharteredAccountantReportForm.controls.totalCreditOperations.value as number;
    this.periodicCharteredAccountantReportCreateUpdate.financialTransactionsDuringPeriodOutEscrowAccount = financialTransactionsDuringPeriodOutEscrowAccount;

    if(this.financialCenterFiles && this.financialCenterFiles.length > 0)
      this.periodicCharteredAccountantReportCreateUpdate.financialCenterFiles = this.financialCenterFiles;
    else
    {
      this.showValidation = true;
      return;
    }

    if(!this.periodicCharteredAccountantReport?.periodOpeningBalance && !this.periodicCharteredAccountantReportCreateUpdate.periodOpeningBalance && this.periodicCharteredAccountantReportCreateUpdate.periodOpeningBalance !== 0 ){
      this.showValidation = true;
      return;
    }

    this.subscriptions.push(
      this._periodicCharteredAccountantReportService.save(this.periodicCharteredAccountantReportCreateUpdate).subscribe((res) => {
        if (res?.isDone) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.dataEmitter.emit(false);
        }
      })
    )
  }

  createPeriodicCharteredAccountantReport(): void {
    this.filter = this.PeriodicCharteredAccountantReportForm.value as {} as PeriodicCharteredAccountantReportCreateUpdateDto;
    this.filter.reportTypeId=Number(this.filter.reportTypeId);
    this.filter.quarterTypeId=Number(this.filter.quarterTypeId);
    this.filter.month=Number(this.filter.month);
    this.filter.year=Number(this.filter.year);
    this.filter.licenseProjectId = this.licenseProjectId as string;
    this.subscriptions.push(
    this._periodicCharteredAccountantReportService.createPeriodicCharteredAccountantReport(this.filter).subscribe((res) => {
      if (res) {
        this.periodicCharteredAccountantReport=res as PeriodicCharteredAccountantReportDto;
      }
    })
    )
  }

  onExistFinancialCenterFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.financialCenterFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.financialCenterFiles=[];
    filesData.eventRes.data.forEach((data: any) => {
      let financialCenterFile={} as FinancialCenterFileCreateUpdateDto;
      financialCenterFile.fileId= data.id
      financialCenterFile.id= "00000000-0000-0000-0000-000000000000";
      financialCenterFile.periodicCharteredAccountantReportId= "00000000-0000-0000-0000-000000000000";
      this.financialCenterFiles?.push(financialCenterFile);
    });
  } 

  onBankStatementFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0){
      this.bankStatementFileId = '';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.bankStatementFileId = filesData.eventRes.data[0].id;
  } 
 
  addPeriodicCharteredAccountantReportDeposit() {
    const item = this._formBuilder.group({
      unitCodeOrExpenseType: ['',Validators.required],
      checkNumber:  [0,Validators.required],
      supplyDate: [new Date(),Validators.required],
      riyalsAmount: [0,Validators.required],
      depositDate: [new Date(),Validators.required],
      sysDepositTypeId: [0,Validators.required]
    });
    this.periodicCharteredAccountantReportDepositsFormArr.push(item);
  }

  removePeriodicCharteredAccountantReportDeposits(index: number) {
    this.periodicCharteredAccountantReportDepositsFormArr.removeAt(index);
  }

  addPeriodicCharteredAccountantReportBatche() {
    const item = this._formBuilder.group({
      unitCodeOrExpenseType: ['',Validators.required],
      checkNumber: [0,Validators.required],
      supplyDate: [new Date(),Validators.required],
      riyalsAmount:[0,Validators.required],
      bankDebitDate: [new Date(),Validators.required],
      sysDepositTypeId: [0,Validators.required]
    });
    this.periodicCharteredAccountantReportBatchesFormArr.push(item);
  }

  calculateClosingBalance() {
    const closingBalanceBasedOnBankStatement = this.PeriodicCharteredAccountantReportForm.controls.closingBalanceBasedOnBankStatement.value ?? 0;
    const periodOpeningBalance = this.periodicCharteredAccountantReport?.periodClosingBalance ?? 0;
    // if (closingBalanceBasedOnBankStatement && periodOpeningBalance) 
      this.calculateClosingBalanceResult = periodOpeningBalance - closingBalanceBasedOnBankStatement;
  }

  removePeriodicCharteredAccountantReportBatchesFormArr(index: number) {
    this.periodicCharteredAccountantReportBatchesFormArr.removeAt(index);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
