import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  subscriptions: Subscription[] = [];
  constructor(
    private _loaderService: LoaderService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._loaderService.showLoader.subscribe((loader: boolean) => {
        this.showLoader = loader;
        this._changeDetectorRef.detectChanges();
      })
    )
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());

  }
}
