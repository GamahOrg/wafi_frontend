import { Component, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from '../../models/tabs.model';
import { TabsService } from '../../services/tabs/tabs.service';
import { RequestTimelineService } from '../../services/request-timeline/request-timeline.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { UnsavedChangesDialogComponent } from 'src/app/core/guards/unsaved-changes-guard/unsaved-changes-dialog/unsaved-changes-dialog.component';

@Component({
  selector: 'app-horizontal-tabs',
  templateUrl: './horizontal-tabs.component.html',
  styleUrls: ['./horizontal-tabs.component.scss']
})
export class HorizontalTabsComponent{

@Input() tabClassName?: string = '';
@ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  subscriptions: Subscription[] = [];
  tabContent: Tabs = new Tabs();
  private previousTabIndex: number = 0;
  private isReverting: boolean = false;

  constructor(
    private _tabsService: TabsService,
    private requestTimelineService: RequestTimelineService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.observeVerticalTabsContent();
    this.observeActiveVerticalTabIndex();
  }
  observeVerticalTabsContent(): void {
    this.subscriptions.push(
      this._tabsService
        .getVerticalTabContent()
        .subscribe((tabContent: Tabs) => {
          // console.log("observeVerticalTabsContent tabContent", tabContent)
          this.tabContent = tabContent;
        })
    );
  }
  updateActiveTabIndex(index: number) {
    // Skip if we're reverting to prevent dialog from reopening
    if (this.isReverting) {
      this.isReverting = false;
      return;
    }

    // Check if there are unsaved changes before switching tabs
    if (this._tabsService.getUnsavedChanges()) {
      // Store the pending tab index
      this._tabsService.pendingTabIndex.next(index);

      const dialogRef = this.dialog.open(UnsavedChangesDialogComponent, {
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        panelClass: 'confirmation-dialog',
        disableClose: true,
        hasBackdrop: true,
        autoFocus: false,
      });

      dialogRef.afterClosed().subscribe((canLeave: boolean) => {
        if (canLeave) {
          // User confirmed to leave, proceed with tab change
          this._tabsService.setUnsavedChanges(false);
          this.tabContent.activeTabIndex = index;
          this._tabsService.updateActiveVerticalTabIndex(index);
          this.previousTabIndex = index;
          this._tabsService.pendingTabIndex.next(null);
        } else {
          // User wants to stay, revert to previous tab
          this._tabsService.pendingTabIndex.next(null);
          // Set flag to prevent dialog from reopening on revert
          this.isReverting = true;
          // Use setTimeout to ensure the tab reverts after Angular's change detection
          setTimeout(() => {
            this.tabContent.activeTabIndex = this.previousTabIndex;
            if (this.tabGroup) {
              this.tabGroup.selectedIndex = this.previousTabIndex;
            }
          }, 0);
        }
      });
    } else {
      // No unsaved changes, proceed normally
      this.tabContent.activeTabIndex = index;
      this._tabsService.updateActiveVerticalTabIndex(index);
      this.previousTabIndex = index;
    }
  }
  observeActiveVerticalTabIndex() {
    this.subscriptions.push(
      this._tabsService.getActiveVerticalTabIndex().subscribe((res: number) => {
        this.tabContent.activeTabIndex = res;
        this.previousTabIndex = res; // Keep previousTabIndex in sync
        this.requestTimelineService.updateRequestId(null);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
