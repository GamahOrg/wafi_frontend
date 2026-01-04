import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;
  showBreadcrumb$: Observable<boolean>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
    this.showBreadcrumb$ = this.breadcrumbService.showBreadcrumb$;
  }
}
