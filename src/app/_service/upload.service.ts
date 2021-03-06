import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.hostUrl}/admin/imgToSave`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
 }

 uploadSiteFile(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `${environment.hostUrl}/admin/imgSiteToSave`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
  }

  uploadSiteLogo(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
  
    formData.append('file', file);
  
    const req = new HttpRequest('POST', `${environment.hostUrl}/admin/logoToSave`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
    }

}
