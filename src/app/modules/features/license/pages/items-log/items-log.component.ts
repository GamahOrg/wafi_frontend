import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsLogService } from '../../services/items-log.service';
import { LicenseProjectAdditionalTermsVersionDto } from '../../models/license-project-additional-terms-version.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-items-log',
  templateUrl: './items-log.component.html',
  styleUrls: ['./items-log.component.scss'],
  providers: [ItemsLogService]
})
export class ItemsLogComponent implements OnInit {
  versions: LicenseProjectAdditionalTermsVersionDto[] = [];
  isLoading: boolean = false;
  licenseId: string = '';
  expandedItems: Set<string> = new Set();

  @Output() onBack = new EventEmitter<void>();

  constructor(private itemsLogService: ItemsLogService , private _sharedLicenseProjectService: SharedLicenseProjectService) { }

  ngOnInit(): void {
    this.getlicenseId();
  }

  loadVersions(): void {
    this.isLoading = true;
    this.itemsLogService.getAllVersions(this.licenseId).subscribe({
      next: (data) => {
        if (data) {
          this.versions = data;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading versions:', error);
        this.isLoading = false;
      }
    });
  }

  getlicenseId() {
    this.licenseId = this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
    if(this.licenseId) {
      this.loadVersions()
    }
  }

  getParentItems(items: any[]): any[] {
    if (items)
      return items.filter(item => item.parentId == null);
    return [];
  }

  getChildItems(parentId: string, items: any[]): any[] {
    if (items)
      return items.filter(item => item.parentId === parentId);
    return [];
  }

  hasChildren(parentId: string, items: any[]): boolean {
    return this.getChildItems(parentId, items).length > 0;
  }

  toggleExpand(itemId: string): void {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }

  getItemNumberDisplay(item: any, items: any[]): string | number {
    if (item.parentId == null) {
      return item?.itemNumber || '';
    } else {
      const parentItem = items.find(i => i.id === item.parentId);
      return `${parentItem?.itemNumber || ''}.${item?.itemNumber || ''}`;
    }
  }

  goBack(): void {
    this.onBack.emit();
  }
}
