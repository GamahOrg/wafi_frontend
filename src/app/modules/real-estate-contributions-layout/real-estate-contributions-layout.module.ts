import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateContributionsLayoutRoutingModule } from './real-estate-contributions-layout-routing.module';
import LayoutComponent from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
    RealEstateContributionsLayoutRoutingModule,
    SharedModule
  ]
})
export class RealEstateContributionsLayoutModule { }
