import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @Input() pdfUrl: string = '';
  @Input() fileId: string = ''; // New input for file ID
  @Input() isLoading: boolean = false;
  @Input() loadError: string = '';
  @Input() retryCallback?: () => void;
  @Input() noContentMessage: string = 'لا يوجد عقد متاح';
  @Input() noContentDescription: string = 'لم يتم العثور على عقد المستفيد النهائي';
  @Input() loadingMessage: string = 'جاري تحميل العقد';
  @Input() loadingDescription: string = 'يرجى الانتظار بينما يتم تحميل عقد المستفيد النهائي';
  @Input() errorMessage: string = 'حدث خطأ في تحميل العقد';

  safePdfUrl: SafeResourceUrl | null = null;
  isFullscreen: boolean = false;
  currentZoom: number = 100;
  private baseZoom: number = 100;
  private baseUrl = `${environment.baseURL}/`;

  constructor(
    private _sanitizer: DomSanitizer,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.updateSafePdfUrl();
  }

  ngOnChanges(): void {
    this.updateSafePdfUrl();
  }

  private updateSafePdfUrl(): void {
    let finalUrl = '';

    // If fileId is provided, build URL using FileManagement API
    if (this.fileId && !this.isLoading && !this.loadError) {
      finalUrl = `${this.baseUrl}api/FileManagment/${this.fileId}/download`;
    }
    // Otherwise use the provided pdfUrl
    else if (this.pdfUrl && !this.isLoading && !this.loadError) {
      finalUrl = this.pdfUrl;
    }

    if (finalUrl) {
      // Add zoom parameter to PDF URL
      const urlWithZoom = finalUrl.includes('?')
        ? `${finalUrl}&zoom=${this.currentZoom}`
        : `${finalUrl}#zoom=${this.currentZoom}`;
      this.safePdfUrl = this._sanitizer.bypassSecurityTrustResourceUrl(urlWithZoom);
      this._cdr.detectChanges();
    } else {
      this.safePdfUrl = null;
    }
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  onRetry(): void {
    if (this.retryCallback) {
      this.retryCallback();
    }
  }

  zoomIn(): void {
    if (this.currentZoom < 200) {
      this.currentZoom += 25;
      this.updateSafePdfUrl();
    }
  }

  zoomOut(): void {
    if (this.currentZoom > 50) {
      this.currentZoom -= 25;
      this.updateSafePdfUrl();
    }
  }

  resetZoom(): void {
    this.currentZoom = this.baseZoom;
    this.updateSafePdfUrl();
  }

  printPdf(): void {
    const url = this.getPdfUrl();
    if (url) {
      const printWindow = window.open(url, '_blank');
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      }
    }
  }

  downloadPdf(): void {
    const url = this.getPdfUrl();
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop() || 'document.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  private getPdfUrl(): string {
    if (this.fileId) {
      return `${this.baseUrl}api/FileManagment/${this.fileId}/download`;
    }
    return this.pdfUrl;
  }
}
