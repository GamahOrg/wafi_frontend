import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';

@Injectable()
export class BreadcrumbService {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  // Subject to control visibility of breadcrumb
  private readonly _showBreadcrumb$ = new BehaviorSubject<boolean>(true);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  // Observable exposing breadcrumb visibility
  readonly showBreadcrumb$ = this._showBreadcrumb$.asObservable();

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
}
