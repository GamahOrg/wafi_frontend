import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Configuration } from "src/app/core/configurations/shared.config";
import { environment } from "src/environments/environment";
// {
//     reportProgress: true,
//     responseType: 'json'
//   }
export class FileUploader {
    id: string = "";
    httpUrl: string = "";
    httpRequestHeaders: HttpHeaders = new HttpHeaders;
    httpRequestParams: HttpParams = new HttpParams;
    multiple: boolean = false;
    uploadAllColor?: string = 'primary';
    buttonText?: string = "اختر ملف";
    attachmentsAreaText?: string = "فقط قم بسحب الملفات وإفلاتها هنا";
    removeAllLabel?: string = "مسح الكل";
    uploadAllLabel?: string = "رفع الكل";
    size: number =5120;
    allowedExtensionsText:string = 'jpg, jpeg أو png';
    /** Allowed files extensions in lower case */
    allowedExtensions?:string[]=[];
}
