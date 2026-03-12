import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrNotificationComponent } from './components/toastr-notification/toastr-notification.component';
import { LanguageComponent } from './components/language/language.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperService } from './services/stepper/stepper.service';
import { TabsComponent } from './components/tabs/tabs.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupPropmtComponent } from './components/popup-propmt/popup-propmt.component';
import { PopupService } from './services/popup/popup.service';
import { NoDataComponent } from './components/no-data/no-data.component';
import { FileManagementService } from './services/fileManagement/file-management.service';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationService } from './services/pagination/pagination.service';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { BreadcrumbService } from '../shared/services/breadcrumb/breadcrumb.service';

// Material Modules
import { MaterialModule } from './modules/material/material.module';
import { MatFileUploadModule } from 'angular-material-fileupload';

// Bootstrap Modules
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';

import { PopupNoteComponent } from './components/popup-note/popup-note.component';
import { OTPInputComponent } from './components/otp-input/otp-input.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionService } from './services/accordion/accordion.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { VerticalTabsComponent } from './components/vertical-tabs/vertical-tabs.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { NgxPrintModule } from 'ngx-print';
import { EditorRequestNotesComponent } from './components/editor-request-notes/editor-request-notes.component';
import { RequestNotesService } from './services/requestNotes/request-notes.service';
import { EditorRequestNotesOnlyComponent } from './components/editor-request-notes-only/editor-request-notes-only.component';
import { ProjectApprovalsService } from '../modules/features/license/services/licenseProjects/project-approvals.service';
import { OTPService } from './services/otp/otp.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotificationsService } from './services/notifications/notifications.service';
import { NotificationListComponent } from './pages/notification-list/notification-list.component';
import { CircularProgressComponent } from './components/circular-progress/circular-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RealEstateContributionFooterComponent } from './components/real-estate-contribution-footer/real-estate-contribution-footer.component';
import { PilotLaunchHintComponent } from './components/pilot-launch-hint/pilot-launch-hint.component';
import { LicenseRequestTimelineComponent } from './components/license-request-timeline/license-request-timeline.component';
import { RequestTimelineService } from './services/request-timeline/request-timeline.service';
import { RealEstateLicenseRequestTimelineComponent } from './components/real-estate-license-request-timeline/real-estate-license-request-timeline.component';
import { HorizontalTabsComponent } from './components/horizontal-tabs/horizontal-tabs.component';
import { RequestApprovalComponent } from './components/request-approval/request-approval.component';
import { CollapsibleDirective } from './directives/collapsible.directive';
import { NumberFormatDirective } from './directives/number-format.directive';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { NationalAddressService } from '../modules/features/facilities/services/facilityProfile/national-address-service/national-address.service';
import { DisableItemConfirmationComponent } from './components/disable-item-confirmation/disable-item-confirmation.component';
import { SaveUpdateConfirmationComponent } from './components/save-update-confirmation/save-update-confirmation.component';
import { HijriDatepickerComponent } from './components/hijri-datepicker/hijri-datepicker.component';
import { HijriDatepickerDirective } from './directives/hijri-datepicker.directive';
import { RejectionConfirmationPopupComponent } from './components/rejection-confirmation-popup/rejection-confirmation-popup.component';
import { ArabicToEnglishNumbersDirective } from './directives/arabic-to-english-numbers.directive';
import { RatingComponent } from './components/rating/rating.component';
import { RatingService } from './services/rating/rating.service';
import { ViewPublicExchangeRequestDetailsComponent } from '../public-pages/view-exchange-request-details/view-public-exchange-request-details.component';

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    showTodayButton: true,
    showClearButton: true,
    containerClass: 'theme-default',
    dateInputFormat: 'DD/MM/YYYY',
    adaptivePosition: true,
  });
}

@NgModule({
  declarations: [
    ViewPublicExchangeRequestDetailsComponent,
    LanguageComponent,
    FileUploaderComponent,
    ToastrNotificationComponent,
    StepperComponent,
    TabsComponent,
    FooterComponent,
    PopupComponent,
    NoDataComponent,
    ConfirmationPopupComponent,
    TooltipComponent,
    PaginationComponent,
    RichTextEditorComponent,
    PopupNoteComponent,
    OTPInputComponent,
    AccordionComponent,
    BreadcrumbComponent,
    VerticalTabsComponent,
    HorizontalTabsComponent,
    GoogleMapsComponent,
    EditorRequestNotesComponent,
    EditorRequestNotesOnlyComponent,
    NotFoundComponent,
    NotificationListComponent,
    CircularProgressComponent,
    RealEstateContributionFooterComponent,
    PilotLaunchHintComponent,
    LicenseRequestTimelineComponent,
    RealEstateLicenseRequestTimelineComponent,
    RequestApprovalComponent,
    CollapsibleDirective,
    NumberFormatDirective,
    PdfViewerComponent,
    DisableItemConfirmationComponent,
    SaveUpdateConfirmationComponent,
    HijriDatepickerComponent,
    HijriDatepickerDirective,
    RejectionConfirmationPopupComponent,
    ArabicToEnglishNumbersDirective,
    PopupPropmtComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatFileUploadModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    DatePipe,
    // Bootstrap Modules
    BsDatepickerModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    RatingModule.forRoot(),

    NgOtpInputModule,
    AccordionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE',
      libraries: ['places'],
    }),
    NgxPrintModule,
    NgCircleProgressModule.forRoot(),
  ],
  providers: [
    StepperService,
    PopupService,
    FileManagementService,
    PaginationService,
    AccordionService,
    RequestNotesService,
    ProjectApprovalsService,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig },
    OTPService,
    NotificationsService,
    RequestTimelineService,
    NationalAddressService,
    RatingService,
  ],
  exports: [
    LanguageComponent,
    MaterialModule,
    MatFileUploadModule,
    FileUploaderComponent,
    StepperComponent,
    FooterComponent,
    NoDataComponent,
    TooltipComponent,
    PaginationComponent,
    AccordionModule,
    AngularEditorModule,
    RichTextEditorComponent,

    // Bootstrap Modules
    BsDatepickerModule,
    BsDropdownModule,
    CarouselModule,
    PopoverModule,
    TooltipModule,
    RatingModule,

    RealEstateContributionFooterComponent,
    PilotLaunchHintComponent,
    TabsComponent,
    HorizontalTabsComponent,
    PopupNoteComponent,
    NgOtpInputModule,
    OTPInputComponent,
    AccordionComponent,
    BreadcrumbComponent,
    VerticalTabsComponent,
    GoogleMapsComponent,
    NgxPrintModule,
    EditorRequestNotesComponent,
    EditorRequestNotesOnlyComponent,
    NotificationListComponent,
    CircularProgressComponent,
    LicenseRequestTimelineComponent,
    RealEstateLicenseRequestTimelineComponent,
    RequestApprovalComponent,
    CollapsibleDirective,
    NumberFormatDirective,
    PdfViewerComponent,
    HijriDatepickerComponent,
    HijriDatepickerDirective,
    ArabicToEnglishNumbersDirective,
    RatingComponent,
  ],
})
export class SharedModule {}
