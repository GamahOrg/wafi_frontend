import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { FileUploader } from '../../models/file-uploader.model';
// import { FileManagementService } from '../../services/fileManagement/file-management.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() data: FileUploader = new FileUploader;
  @Output() fileRemoved = new EventEmitter<any>();
  @Output() fileUploaded = new EventEmitter<any>();
  // @Input() data: FileUploader = new FileUploader();
  // @Output() fileRemoved = new EventEmitter<any>();
  // @Output() fileUploaded = new EventEmitter<any>();
  selectedFiles?: FileList
  currentFile?: File | FileList;
  progress = 0;
  message = '';
  extensionErrorMessage ='';
  // fileInfos?: Observable<any>;
  selectedFilesName: string[] = []
  constructor(private uploadService: FileManagementService) {
  }
  ngOnInit(): void {
    console.log(this.data);
    // this.fileInfos = this.uploadService.getFiles();
    this.data.size=30720;
    if(!this.data.size)
      this.data.size=30720;
    if(!this.data.allowedExtensionsText)
      this.data.allowedExtensionsText = 'pdf, doc, docx, .xls, .xlsx, jpg, jpeg أو png';
    if(!this.data.allowedExtensions || this.data.allowedExtensions.length ==0)
      this.data.allowedExtensions = ['.pdf', '.doc', '.docx','.xls','.xlsx', '.jpg','.jpeg','.png']
  }
  removeEvent(controlName: string, e: any): void {
    // console.log("fileUploadRemoveEvents", controlName);
    // console.log("fileUploadRemoveEvents", e);
    this.fileRemoved.emit({ id: controlName, eventRes: e })
  }

  onUpload(controlName: string, e: any): void {
    // console.log("onUpload", controlName);
    // console.log("onUpload", e);
    this.fileUploaded.emit({ id: controlName, eventRes: e })
  }

  allowDrop(ev: any): void {
    ev.preventDefault();
  }
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files; 
    this.updateSelectedFileNames(event)
  }

  updateSelectedFileNames(event: any) {
    this.selectedFilesName = [];
    for (let i = 0; i < event.target.files.length; i++) {
      let file = event.target.files.item(i)
      this.selectedFilesName.push(file.name)
    }
  }

  
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const files: FileList | File = this.selectedFiles;
      if (files) {
        if(files.length)
        {
          for (let index = 0; index < files.length; index++)
           {
            const element = files.item(index) as File;
            if((element?.size as number)/1024 > this.data.size){
            this.message =' لا يمكن رفع الملف المسمي بأسم '+element?.name+' بسبب  حجمه';
            return;
            }
            if(!this.data.allowedExtensions?.includes(element.name.slice(element.name.lastIndexOf(".")).toLowerCase()))
            {
              this.extensionErrorMessage = `يجب رفع ملف بصيغة ${this.data.allowedExtensions?.join(' ,')} فقط`;
              return;
            }
          }
        }

        
        this.currentFile = files;
        this.uploadService.UploadMultiple(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.onUpload("", event.body)
              console.log(event.body);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'لا يمكن رفع هذا الملف';
            }

            this.currentFile = undefined;
          },
        });
      }

      this.selectedFiles = undefined;
    }
  }
  deleteAll(): void {
    this.selectedFiles = undefined;
    this.currentFile = undefined;
    this.selectedFilesName = []
  }
}
