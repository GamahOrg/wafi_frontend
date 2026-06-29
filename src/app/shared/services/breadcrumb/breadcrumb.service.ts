import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, Subject, filter } from 'rxjs';
import { Breadcrumb, BreadcrumbOption } from 'src/app/shared/models/breadcrumb.model';

export interface SelectableBreadcrumb {
  options: BreadcrumbOption[];
  activeOptionIndex: number;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  // Subject to control visibility of breadcrumb
  private readonly _showBreadcrumb$ = new BehaviorSubject<boolean>(true);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  // Observable exposing breadcrumb visibility
  readonly showBreadcrumb$ = this._showBreadcrumb$.asObservable();

  // When true, the first breadcrumb item (e.g. "الرئيسية") is removed
  private _skipFirstBreadcrumb = false;

  // Selectable breadcrumb item (separate from route breadcrumbs)
  private readonly _selectableItem$ = new BehaviorSubject<SelectableBreadcrumb | null>(null);
  readonly selectableItem$ = this._selectableItem$.asObservable();

  // Subject emitting when user selects a different option from the dropdown
  private readonly _selectableItemChanged$ = new Subject<number>();
  readonly selectableItemChanged$ = this._selectableItemChanged$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        // Construct the breadcrumb hierarchy
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        const shouldHide = this.addBreadcrumb(root, [], breadcrumbs);

        // Remove first breadcrumb if skip flag is set
        if (this._skipFirstBreadcrumb && breadcrumbs.length > 0) {
          breadcrumbs.shift();
        }

        // Emit the new hierarchy
        this._breadcrumbs$.next(breadcrumbs);

        // Hide breadcrumb if route has hideBreadcrumb: true
        this._showBreadcrumb$.next(!shouldHide);
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ): boolean {
    let shouldHide = false;

    if (route) {
      // Check if this route should hide breadcrumb
      if (route.data['hideBreadcrumb']) {
        shouldHide = true;
      }

      // Construct the route URL
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      // If route declares a parent breadcrumb override, replace the immediately
      // preceding breadcrumb in the trail with the provided label/url.
      const parentOverride = route.data['replaceParentBreadcrumb'];
      if (parentOverride && breadcrumbs.length > 0) {
        breadcrumbs[breadcrumbs.length - 1] = {
          label: parentOverride.label,
          url: parentOverride.url,
        };
      }

      // Add an element for the current route part
      if (route.data['breadcrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };
        breadcrumbs.push(breadcrumb);
      }

      // Add another element for the next route part
      if (route.firstChild) {
        const childShouldHide = this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
        shouldHide = shouldHide || childShouldHide;
      }
    }

    return shouldHide;
  }

  private getLabel(data: Data) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data['breadcrumb'] === 'function'
      ? data['breadcrumb'](data)
      : data['breadcrumb'];
  }

  setSkipFirstBreadcrumb(skip: boolean): void {
    this._skipFirstBreadcrumb = skip;
    if (skip) {
      const current = this._breadcrumbs$.value;
      if (current.length > 0) {
        this._breadcrumbs$.next(current.slice(1));
      }
    }
  }

  setSelectableItems(options: BreadcrumbOption[], activeIndex: number): void {
    this._selectableItem$.next({ options, activeOptionIndex: activeIndex });
  }

  clearSelectableItems(): void {
    this._selectableItem$.next(null);
  }

  updateActiveOption(index: number): void {
    const current = this._selectableItem$.value;
    if (current) {
      this._selectableItem$.next({ ...current, activeOptionIndex: index });
    }
  }

  onSelectableItemChanged(index: number): void {
    this.updateActiveOption(index);
    this._selectableItemChanged$.next(index);
  }
}
