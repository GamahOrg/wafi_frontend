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

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    // LanguageComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    // TranslateModule.forChild(),
    SharedModule,
  ],
})
export class LayoutModule {}
