import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from './core/configurations/shared.config';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { MailConfirmationComponent } from './core/pages/mail-confirmation/mail-confirmation.component';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';
import { TokenGuard } from './core/guards/token-guard/token.guard';
import { ViewPublicExchangeRequestDetailsComponent } from './public-pages/view-exchange-request-details/view-public-exchange-request-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Configuration.modules.landing,
    pathMatch: 'full',
    // loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
    // canActivate: [
    //   AuthGuard
    // ],
  },
  {
    path: `${Configuration.pages.confirmMail}/:customerId`,
    component: MailConfirmationComponent,
  },
  { path: 'exchange-document/:id', component: ViewPublicExchangeRequestDetailsComponent },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  //   canActivate: [
  //     AuthGuard
  //   ],
  // },
  // {
  //   path: Configuration.modules.auth,
  //   loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  //   canActivate:[
  //     TokenGuard
  //   ]
  // },
  {
    path: Configuration.modules.realEstateContributionsAuth,
    loadChildren: () =>
      import('./modules/real-estate-contributions-auth/real-estate-contributions-auth.module').then(
        (m) => m.RealEstateContributionsAuthModule,
      ),
    // canActivate:[
    //   TokenGuard
    // ]
  },
  {
    path: Configuration.modules.auth,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // canActivate:[
    //   TokenGuard
    // ]
  },

  {
    path: Configuration.modules.wafi,
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [
    //   AuthGuard
    // ],
  },
  {
    path: Configuration.modules.realEstateContributions,
    loadChildren: () =>
      import('./modules/real-estate-contributions-layout/real-estate-contributions-layout.module').then(
        (m) => m.RealEstateContributionsLayoutModule,
      ),
    // canActivate: [
    //   AuthGuard
    // ],
  },
  {
    path: Configuration.modules.landing,
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),

    // canActivate: [
    //   TokenGuard
    // ]
  },
  {
    path: Configuration.modules.deedsApproval,
    loadChildren: () =>
      import('./modules/deeds-approval/deeds-approval.module').then(
        (m) => m.DeedsApprovalModule,
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
