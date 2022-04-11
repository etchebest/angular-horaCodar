import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moment';
import { environment } from 'src/environments/environment';
import { Response } from './../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl)
  }
}
