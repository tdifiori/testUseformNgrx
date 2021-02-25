import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { formConfig } from '../models/formConfig/formConfig';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  baseUrl: string = environment.server.endpoint;

  constructor(private http: HttpClient) {}

  getFormTemplateList(): Observable<formConfig[]> {
    const endpoint = `${this.baseUrl}/formConfigMock`;
    return this.http.get<formConfig[]>(endpoint) 
      .pipe(catchError((response: any) => throwError(response.error.message)));
  }


  getFormTemplateView(id): Observable<formConfig[]> {
    const endpoint = `${this.baseUrl}/formConfigMock/${id}`;
    return this.http.get<formConfig[]>(endpoint) 
      .pipe(catchError((response: any) => throwError(response.error.message)));
  }


}
