import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../models/breadcrumb.model';
import { BreadcrumbService, SelectableBreadcrumb } from 'src/app/shared/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;
  showBreadcrumb$: Observable<boolean>;
  selectableItem$: Observable<SelectableBreadcrumb | null>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
    this.showBreadcrumb$ = this.breadcrumbService.showBreadcrumb$;
    this.selectableItem$ = this.breadcrumbService.selectableItem$;
  }

  onSelectableChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const index = Number(selectElement.value);
    this.breadcrumbService.onSelectableItemChanged(index);
  }
}
