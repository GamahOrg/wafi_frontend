import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import LayoutComponent from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
// import { LanguageComponent } from './components/header/language/language.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LincenseRequestProjectService } from '../features/license-project-requests/services/lincense-request-project.service';
import { RequestDetailsRedirectionComponent } from './components/request-details-redirection/request-details-redirection.component';
import { LicenseRequestHeaderService } from '../features/license/services/license-request-header.service';
import { SharedLicenseProjectService } from '../features/license/services/sharedLicenseProject/shared-license-project.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    // LanguageComponent,
    NotificationsComponent,
    RequestDetailsRedirectionComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    // TranslateModule.forChild(),
    SharedModule,
  ],
  providers:[LincenseRequestProjectService,LicenseRequestHeaderService,SharedLicenseProjectService ]
})
export class LayoutModule {}
